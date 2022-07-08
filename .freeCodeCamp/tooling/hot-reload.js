// This file handles the watching of the /curriculum folder for changes
// and executing the command to run the tests for the next (current) lesson
import { readEnv } from "./env.js";
import runLesson from "./lesson.js";
import runTests from "./test.js";
import { watch } from "chokidar";
const { TEST_POLLING_RATE, RUN_TESTS_ON_WATCH } = await readEnv();
const curriculumFolder = "../";

function hotReload(ws) {
  console.log(`Watching for file changes on ${curriculumFolder}`);
  let isWait = false;
  let isClearConsole = false;

  watch(curriculumFolder, { ignored: ".logs/.temp.log" }).on(
    "all",
    async (event, name) => {
      if (name) {
        if (isWait) return;
        isWait = setTimeout(() => {
          isWait = false;
        }, TEST_POLLING_RATE);

        const { CURRENT_PROJECT, CURRENT_LESSON } = await readEnv();
        if (!CURRENT_PROJECT) {
          return;
        }
        if (isClearConsole) {
          console.clear();
        }
        runLesson(ws, CURRENT_PROJECT, Number(CURRENT_LESSON));
        // console.log(`Watcher: ${event} - ${name}`);
        if (RUN_TESTS_ON_WATCH === "true") {
          runTests(ws, CURRENT_PROJECT, Number(CURRENT_LESSON));
        }
      }
    }
  );
}

export default hotReload;
