// This file handles the watching of the /curriculum folder for changes
// and executing the command to run the tests for the next (current) lesson
import { getState, getProjectConfig, ROOT } from './env.js';
import runLesson from './lesson.js';
import runTests from './test.js';
import { watch } from 'chokidar';
import { logover } from './logger.js';

const defaultPathsToIgnore = [
  '.logs/.temp.log',
  'config/',
  '/node_modules/',
  '.git',
  '/target/',
  '/test-ledger/'
];

function hotReload(ws, pathsToIgnore = defaultPathsToIgnore) {
  logover.info(`Watching for file changes on ${ROOT}`);
  let isWait = false;
  let testsRunning = false;
  let isClearConsole = false;

  watch(ROOT, {
    ignoreInitial: true
    // `ignored` appears to do nothing. Have tried multiple permutations
    // ignored: pathsToIgnore.join('|') //p => pathsToIgnore.includes(p)
  }).on('all', async (event, name) => {
    if (name && !pathsToIgnore.find(p => name.includes(p))) {
      if (isWait) return;
      const { currentProject } = await getState();
      if (!currentProject) {
        return;
      }

      const { testPollingRate, runTestsOnWatch } = await getProjectConfig(
        currentProject
      );
      isWait = setTimeout(() => {
        isWait = false;
      }, testPollingRate);

      if (isClearConsole) {
        console.clear();
      }

      await runLesson(ws, currentProject);
      if (runTestsOnWatch && !testsRunning) {
        logover.debug(`Watcher: ${event} - ${name}`);
        testsRunning = true;
        await runTests(ws, currentProject);
        testsRunning = false;
      }
    }
  });
}

export default hotReload;
