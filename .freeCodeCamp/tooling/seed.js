// This file handles seeding the lesson contents with the seed in markdown.
import { join } from 'path';
import {
  getLessonFromFile,
  getLessonSeed,
  getCommands,
  getFilesWithSeed,
  seedToIterator
} from './parser.js';
import { ROOT, getState, freeCodeCampConfig } from './env.js';
import { writeFile } from 'fs/promises';
import { promisify } from 'util';
import { exec } from 'child_process';
import { logover } from './logger.js';
const execute = promisify(exec);

export default async function seedLesson(ws, project) {
  // TODO: Use ws to display loader whilst seeding
  const lessonNumber = project.currentLesson;
  const { locale } = await getState();
  const projectFile = join(
    ROOT,
    freeCodeCampConfig.curriculum.locales[locale],
    project.dashedName + '.md'
  );
  const lesson = await getLessonFromFile(projectFile, lessonNumber);
  const seed = getLessonSeed(lesson);

  const commands = getCommands(seed);
  const filesWithSeed = getFilesWithSeed(seed);

  try {
    await runCommands(commands);
    await runSeed(filesWithSeed);
  } catch (e) {
    // TODO: Add error to UI explaining error
    logover.error(e);
  }
}

/**
 * Runs the given array of commands in order
 * @param {string[]} commands - Array of commands to run
 */
export async function runCommands(commands) {
  // Execute the following commands in the shell
  for (const command of commands) {
    const { stdout, stderr } = await execute(command);
    if (stderr) {
      logover.error(stderr);
      return Promise.reject(stderr);
    }
  }
  return Promise.resolve();
}

/**
 * Runs the given command
 * @param {string} command - Commands to run
 */
export async function runCommand(command, path = '.') {
  const cmdOut = await execute(command, {
    cwd: join(ROOT, path),
    shell: '/bin/bash'
  });
  return cmdOut;
}

/**
 * Runs the given array of files with seed
 * @param {[string, string][]} filesWithSeed - [[filePath, fileSeed]]
 */
export async function runSeedDeprecated(filesWithSeed) {
  try {
    for (const [filePath, fileSeed] of filesWithSeed) {
      const filePathWithRoot = `${filePath}`;
      await writeFile(filePathWithRoot, fileSeed);
    }
  } catch (e) {
    return Promise.reject(e);
  }
  return Promise.resolve();
}
/**
 * Runs the given array of files with seed
 */
export async function runSeed(fileSeed, filePath, projectPath) {
  const path = join(ROOT, projectPath, filePath);
  await writeFile(path, fileSeed);
}

export async function runLessonSeed(seed, currentProject, lessonNumber) {
  const seedGenerator = seedToIterator(seed);
  try {
    for (const cmdOrFile of seedGenerator) {
      if (typeof cmdOrFile === 'string') {
        const { stdout, stderr } = await runCommand(cmdOrFile, currentProject);
        if (stdout || stderr) {
          logover.debug(stdout, stderr);
        }
      } else {
        const { filePath, fileSeed } = cmdOrFile;
        await runSeed(fileSeed, filePath, currentProject);
      }
    }
  } catch (e) {
    logover.error('Failed to run seed for lesson: ', lessonNumber);
    throw new Error(e);
  }
}
