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
import { join } from 'path';
import { logover } from './logger.js';

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
        logover.debug('Starting: --before-all-- hook');
        await eval(`(async () => {${beforeAll}})()`);
        logover.debug('Finished: --before-all-- hook');
      } catch (e) {
        logover.error('--before-all-- hook failed to run:');
        logover.error(e);
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
          logover.debug('Starting: --before-each-- hook');
          const _beforeEachOut = await eval(
            `(async () => { ${beforeEach} })();`
          );
          logover.debug('Finished: --before-each-- hook');
        } catch (e) {
          logover.error('--before-each-- hook failed to run:');
          logover.error(e);
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
          logover.error(e);
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
          logover.debug('Starting: --after-all-- hook');
          await eval(`(async () => {${afterAll}})()`);
          logover.debug('Finished: --after-all-- hook');
        } catch (e) {
          logover.error('--after-all-- hook failed to run:');
          logover.error(e);
        }
      }
    }
  } catch (e) {
    logover.error('Test Error: ');
    logover.error(e);
  }
}
