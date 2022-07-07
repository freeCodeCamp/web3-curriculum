// This file parses answer files for lesson content
import {
  getLessonFromFile,
  getLessonDescription,
  getLessonHintsAndTests,
  getProjectTitle,
  getLessonSeed,
  isForceFlag,
} from "./parser.js";
import { LOCALE } from "./t.js";
import {
  updateDescription,
  updateProjectHeading,
  updateTests,
  updateProject,
} from "./client-socks.js";
import { PATH, readEnv } from "./env.js";
import seedLesson from "./seed.js";

async function runLesson(ws, project, lessonNumber) {
  const locale = LOCALE === "undefined" ? "english" : LOCALE ?? "english";
  const projectFile = `${PATH}/tooling/locales/${locale}/${project}.md`;
  const lesson = await getLessonFromFile(projectFile, Number(lessonNumber));
  const description = getLessonDescription(lesson);

  updateProject(ws, project);

  const { SEED_EVERY_LESSON, INTEGRATED_PROJECT } = await readEnv();
  if (INTEGRATED_PROJECT !== "true") {
    const hintsAndTestsArr = getLessonHintsAndTests(lesson);
    updateTests(
      ws,
      hintsAndTestsArr.reduce((acc, curr, i) => {
        return [
          ...acc,
          { passed: false, testText: curr[0], testId: i, isLoading: false },
        ];
      }, [])
    );
  }

  const { projectTopic, currentProject } = await getProjectTitle(projectFile);
  updateProjectHeading(ws, { projectTopic, currentProject, lessonNumber });
  updateDescription(ws, description);

  const seed = getLessonSeed(lesson);
  const isForce = isForceFlag(seed);
  // force flag overrides seed flag
  if (
    (SEED_EVERY_LESSON === "true" && !isForce) ||
    (SEED_EVERY_LESSON !== "true" && isForce)
  ) {
    await seedLesson(ws, project, lessonNumber);
  }
}

export default runLesson;
