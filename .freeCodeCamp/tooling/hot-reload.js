// This file handles the watching of the /curriculum folder for changes
// and executing the command to run the tests for the next (current) lesson
import { readEnv, getProjectConfig } from './env.js';
import runLesson from './lesson.js';
import runTests from './test.js';
import { watch } from 'chokidar';
const { CURRENT_PROJECT } = await readEnv();
const { testPollingRate, runTestsOnWatch } = await getProjectConfig(
  CURRENT_PROJECT
);
const curriculumFolder = '../';

function hotReload(ws) {
  console.log(`Watching for file changes on ${curriculumFolder}`);
  let isWait = false;
  let isClearConsole = false;

  watch(curriculumFolder, { ignored: '.logs/.temp.log' }).on(
    'all',
    async (event, name) => {
      if (name) {
        if (isWait) return;
        isWait = setTimeout(() => {
          isWait = false;
        }, testPollingRate);

        const { CURRENT_PROJECT } = await readEnv();
        if (!CURRENT_PROJECT) {
          return;
        }
        const project = await getProjectConfig(CURRENT_PROJECT);
        if (isClearConsole) {
          console.clear();
        }
        runLesson(ws, project);
        // console.log(`Watcher: ${event} - ${name}`);
        if (runTestsOnWatch) {
          runTests(ws, project);
        }
      }
    }
  );
}

export default hotReload;
