// Handles all the resetting of the projects

import { join } from 'path';
import { getConfig, getProjectConfig, getState, ROOT } from './env.js';
import { logover } from './logger.js';
import { getLessonFromFile, getLessonSeed } from './parser.js';
import { runCommand, runLessonSeed } from './seed.js';

export async function resetProject() {
  // Get commands and handle file setting
  const { currentProject } = await getState();
  const freeCodeCampConfig = await getConfig();
  const project = await getProjectConfig(currentProject);
  const { currentLesson } = project;
  const FILE = join(
    ROOT,
    freeCodeCampConfig.curriculum.locales['english'],
    project.dashedName + '.md'
  );

  let lessonNumber = 1;
  let lesson = await getLessonFromFile(FILE, lessonNumber);
  if (!lesson) {
    return new Error(`No lesson found for ${currentProject}`);
  }
  await gitResetCurrentProjectDir();
  while (lessonNumber <= currentLesson) {
    const seed = getLessonSeed(lesson);
    if (seed) {
      await runLessonSeed(seed, currentProject, lessonNumber);
    }
    lessonNumber++;
    lesson = await getLessonFromFile(FILE, lessonNumber);
  }
}

async function gitResetCurrentProjectDir() {
  const { currentProject } = await getState();
  const project = await getProjectConfig(currentProject);
  try {
    logover.debug(`Cleaning '${project.dashedName}'`);
    const { stdout, stderr } = await runCommand(
      `git clean -f -q -- ${project.dashedName}`
    );
  } catch (e) {
    logover.error(e);
  }
}
