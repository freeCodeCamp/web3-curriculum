// This file parses answer files for lesson content
import { join } from 'path';
import {
  getLessonFromFile,
  getLessonDescription,
  getLessonHintsAndTests,
  getProjectTitle,
  getLessonSeed,
  isForceFlag
} from './parser.js';
import {
  updateDescription,
  updateProjectHeading,
  updateTests,
  updateProject
} from './client-socks.js';
import { ROOT, getState, getProjectConfig, freeCodeCampConfig } from './env.js';
import seedLesson from './seed.js';

/**
 * Runs the lesson from the `project` config.
 * @param {WebSocket} ws WebSocket connection to the client
 * @param {object} projectDashedName Project dashed-name
 */
async function runLesson(ws, projectDashedName) {
  const project = await getProjectConfig(projectDashedName);
  const { locale } = await getState();
  const projectFile = join(
    ROOT,
    freeCodeCampConfig.curriculum.locales[locale],
    project.dashedName + '.md'
  );
  const lessonNumber = project.currentLesson;
  const lesson = await getLessonFromFile(projectFile, lessonNumber);
  const description = getLessonDescription(lesson);

  updateProject(ws, project);

  if (!project.isIntegrated) {
    const hintsAndTestsArr = getLessonHintsAndTests(lesson);
    updateTests(
      ws,
      hintsAndTestsArr.reduce((acc, curr, i) => {
        return [
          ...acc,
          { passed: false, testText: curr[0], testId: i, isLoading: false }
        ];
      }, [])
    );
  }

  const { projectTopic, currentProject } = await getProjectTitle(projectFile);
  updateProjectHeading(ws, { projectTopic, currentProject, lessonNumber });
  updateDescription(ws, description);

  const seed = getLessonSeed(lesson);
  if (seed) {
    const isForce = isForceFlag(seed);
    // force flag overrides seed flag
    if (
      (project.seedEveryLesson && !isForce) ||
      (!project.seedEveryLesson && isForce)
    ) {
      await seedLesson(ws, project, lessonNumber);
    }
  }
}

export default runLesson;
