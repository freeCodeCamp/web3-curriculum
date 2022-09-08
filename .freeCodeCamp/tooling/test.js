// These are used in the local scope of the `eval` in `runTests`
import fs from 'fs';
import { assert, AssertionError } from 'chai';
import __helpers_c from './test-utils.js';

import {
  getLessonHintsAndTests,
  getLessonFromFile,
  getBeforeAll,
  getBeforeEach,
  getAfterAll
} from './parser.js';

import {
  freeCodeCampConfig,
  getProjectConfig,
  getState,
  ROOT,
  setProjectConfig
} from './env.js';
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

let __helpers = __helpers_c;

export default async function runTests(ws, projectDashedName) {
  // Update __helpers with dynamic utils:
  const helpers = freeCodeCampConfig.tooling?.['helpers'];
  if (helpers) {
    const dynamicHelpers = await import(join(ROOT, helpers));
    __helpers = { ...__helpers_c, ...dynamicHelpers };
  }
  const project = await getProjectConfig(projectDashedName);
  const { locale } = await getState();
  // toggleLoaderAnimation(ws);
  const lessonNumber = project.currentLesson;
  const projectFile = join(
    ROOT,
    freeCodeCampConfig.curriculum.locales[locale],
    project.dashedName + '.md'
  );
  try {
    const lesson = await getLessonFromFile(projectFile, lessonNumber);
    const beforeAll = getBeforeAll(lesson);
    const beforeEach = getBeforeEach(lesson);
    const afterAll = getAfterAll(lesson);

    if (beforeAll) {
      try {
        debug('Starting: --before-all-- hook');
        await eval(`(async () => {${beforeAll}})()`);
        debug('Finished: --before-all-- hook');
      } catch (e) {
        error('--before-all-- hook failed to run:');
        error(e);
      }
    }
    // toggleLoaderAnimation(ws);

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
    const testPromises = hintsAndTestsArr.map(async ([hint, testCode], i) => {
      if (beforeEach) {
        try {
          debug('Starting: --before-each-- hook');
          const _beforeEachOut = await eval(
            `(async () => { ${beforeEach} })();`
          );
          debug('Finished: --before-each-- hook');
        } catch (e) {
          error('--before-each-- hook failed to run:');
          error(e);
        }
      }
      try {
        const _testOutput = await eval(`(async () => {${testCode}})();`);
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

        const testState = {
          passed: false,
          testText: hint,
          isLoading: false,
          testId: i
        };
        const consoleError = { ...testState, error: e };

        updateConsole(ws, consoleError);
        updateTest(ws, testState);
        return Promise.reject(`- ${hint}\n`);
      }
      return Promise.resolve();
    });

    try {
      const result = await Promise.allSettled(testPromises);
      const passed = result.every(r => r.status === 'fulfilled');
      if (passed) {
        if (!project.isIntegrated) {
          await setProjectConfig(project.dashedName, {
            currentLesson: lessonNumber + 1
          });
          await runLesson(ws, projectDashedName);
          updateHints(ws, '');
        }
      } else {
        updateHints(
          ws,
          result
            .filter(r => r.status === 'rejected')
            .map(r => r.value)
            .join('\n')
        );
      }
    } catch (e) {
      // TODO: This should not ever run...
      updateHints(ws, e);
    } finally {
      if (afterAll) {
        try {
          debug('Starting: --after-all-- hook');
          await eval(`(async () => {${afterAll}})()`);
          debug('Finished: --after-all-- hook');
        } catch (e) {
          error('--after-all-- hook failed to run:');
          error(e);
        }
      }
    }
  } catch (e) {
    error('Test Error: ');
    debug(e);
  }
}
