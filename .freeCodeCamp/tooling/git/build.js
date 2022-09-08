// This file handles creating the Git curriculum branches
import { join } from 'path';
import { getState, setState } from '../env.js';
import {
  getCommands,
  getFilesWithSeed,
  getLessonFromFile,
  getLessonSeed
} from '../parser.js';
import { runCommands, runSeed } from '../seed.js';
import {
  checkoutMain,
  commit,
  deleteBranch,
  initCurrentProjectBranch,
  pushProject
} from './gitterizer.js';

const PROJECT_LIST = ['project-1'];

for (const project of PROJECT_LIST) {
  await setState({ currentProject: project });
  try {
    await deleteBranch(project);
    await buildProject();
  } catch (e) {
    console.error('🔴 Failed to build project: ', project);
    await deleteBranch(project);
    throw new Error(e);
  } finally {
    await checkoutMain();
    console.log('✅ Successfully built project: ', project);
  }
}
console.log('✅ Successfully built all projects');

async function buildProject() {
  const { currentProject } = await getState();
  const FILE = join(
    ROOT,
    freeCodeCampConfig.curriculum.locales['english'],
    project.dashedName + '.md'
  );

  try {
    await initCurrentProjectBranch();
  } catch (e) {
    console.error('🔴 Failed to create a branch for ', currentProject);
    throw new Error(e);
  }

  let lessonNumber = 1;
  let lesson = await getLessonFromFile(FILE, lessonNumber);
  if (!lesson) {
    return Promise.reject(
      new Error(`🔴 No lesson found for ${currentProject}`)
    );
  }
  while (lesson) {
    const seed = getLessonSeed(lesson);

    if (seed) {
      const commands = getCommands(seed);
      const filesWithSeed = getFilesWithSeed(seed);
      try {
        await runCommands(commands);
        await runSeed(filesWithSeed);
      } catch (e) {
        console.error('🔴 Failed to run seed for lesson: ', lessonNumber);
        throw new Error(e);
      }
    }
    try {
      // Always commit? Or, skip when seed is empty?
      await commit(lessonNumber);
    } catch (e) {
      throw new Error(e);
    }
    lessonNumber++;
    lesson = await getLessonFromFile(FILE, lessonNumber);
  }

  try {
    await pushProject();
  } catch (e) {
    throw new Error(e);
  }
}
