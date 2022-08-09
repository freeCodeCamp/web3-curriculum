// These are used in the local scope of the `eval` in `runTests`
import fs from 'fs';
import { assert, AssertionError } from 'chai';
import __helpers from './test-utils.js';

import {
  getLessonHintsAndTests,
  getLessonFromFile,
  getBeforeAll,
  getBeforeEach
} from './parser.js';

import { t, LOCALE } from './t.js';
import { ROOT, setProjectConfig } from './env.js';
import runLesson from './lesson.js';
import {
  toggleLoaderAnimation,
  updateTest,
  updateTests,
  updateConsole,
  updateHints
} from './client-socks.js';
import logover, { error, warn, debug, info } from 'logover';
import { join } from 'path';
logover({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug'
});

export default async function runTests(ws, project) {
  const locale = LOCALE === 'undefined' ? 'english' : LOCALE ?? 'english';
  toggleLoaderAnimation(ws);
  const lessonNumber = project.currentLesson;
  const projectFile = join(
    ROOT,
    '.freeCodeCamp/tooling/locales',
    locale,
    project.dashedName + '.md'
  );
  try {
    const lesson = await getLessonFromFile(projectFile, lessonNumber);
    const beforeAll = getBeforeAll(lesson);
    const beforeEach = getBeforeEach(lesson);

    if (beforeAll) {
      try {
        await eval(`(async () => {${beforeAll}})()`);
      } catch (e) {
        error('--before-all-- hook failed to run:');
        error(e);
      }
    }

    const hintsAndTestsArr = getLessonHintsAndTests(lesson);
    updateTests(
      ws,
      hintsAndTestsArr.reduce((acc, curr, i) => {
        return [
          ...acc,
          { passed: false, testText: curr[0], testId: i, isLoading: true }
        ];
      }, [])
    );
    updateConsole(ws, '');
    const testPromises = hintsAndTestsArr.map(async ([hint, test], i) => {
      if (beforeEach) {
        try {
          const _beforeEachOut = await eval(
            `(async () => { ${beforeEach} })();`
          );
        } catch (e) {
          error('--before-each-- hook failed to run:');
          error(e);
        }
      }
      try {
        const _testOutput = await eval(`(async () => {${test}})();`);
        updateTest(ws, {
          passed: true,
          testText: hint,
          isLoading: false,
          testId: i
        });
      } catch (e) {
        if (!(e instanceof AssertionError)) {
          error(e);
        }
        const consoleError = { id: i, hint, error: e };

        updateConsole(ws, consoleError);
        updateTest(ws, {
          passed: false,
          testText: hint,
          isLoading: false,
          testId: i
        });
        return Promise.reject(`- ${hint}\n`);
      }
      return Promise.resolve();
    });

    try {
      const passed = await Promise.all(testPromises);
      if (passed) {
        debug(await t('lesson-correct', { lessonNumber }));
        setProjectConfig(project.dashedName, {
          currentLesson: lessonNumber + 1
        });
        runLesson(ws, project);
        updateHints(ws, '');
      }
    } catch (e) {
      debug(e);
      updateHints(ws, e);
    }
  } catch (e) {
    debug(await t('tests-error'));
    error(e);
  } finally {
    toggleLoaderAnimation(ws);
  }
}
