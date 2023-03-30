/**
 * @file Provides command-line output of useful debugging information
 * @example
 *
 * ```bash
 * node tooling/camper-info.js --history --directory
 * ```
 */

import {
  getProjectConfig,
  getConfig,
  getState
} from '@freecodecamp/freecodecamp-os/.freeCodeCamp/tooling/env.js';
import __helpers from '@freecodecamp/freecodecamp-os/.freeCodeCamp/tooling/test-utils.js';
import { Logger } from 'logover';
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import os from 'os';

const logover = new Logger({ level: 'debug', timestamp: null });

const FLAGS = process.argv;

async function main() {
  try {
    const handleFlag = {
      '--history': printCommandHistory,
      '--directory': printDirectoryTree
    };
    const projectConfig = await getProjectConfig();
    const config = await getConfig();
    const state = await getState();

    const { currentProject } = state;
    const { currentLesson } = projectConfig;
    const { version } = config;

    const devContainerFile = await readFile(
      '.devcontainer/devcontainer.json',
      'utf-8'
    );
    const devConfig = JSON.parse(devContainerFile);
    const coursesVersion = devConfig.extensions?.find(e =>
      e.match('freecodecamp-courses')
    );

    const { stdout } = await __helpers.getCommandOutput('git log -1 --oneline');

    const osInfo = `
    Architecture: ${os.arch()}
    Platform: ${os.platform()}
    Release: ${os.release()}
    Type: ${os.type()}
    `;

    logover.info('Project: ', currentProject);
    logover.info('Lesson Number: ', currentLesson);
    logover.info('Curriculum Version: ', version);
    logover.info('freeCodeCamp - Courses: ', coursesVersion);
    logover.info('Commit: ', stdout);
    logover.info('OS Info:', osInfo);

    for (const arg of FLAGS) {
      await handleFlag[arg]?.();
    }
    async function printDirectoryTree() {
      const files = await readdir('.', { withFileTypes: true });
      let depth = 0;
      for (const file of files) {
        if (file.isDirectory() && file.name === currentProject) {
          await recurseDirectory(file.name, depth);
        }
      }
    }

    async function printCommandHistory() {
      const historyCwd = await readFile('.logs/.history_cwd.log', 'utf-8');
      logover.info('Command History:\n', historyCwd);
    }
  } catch (e) {
    logover.error(e);
  }
}

main();

const IGNORE = [
  'node_modules',
  'target',
  'test-ledger',
  'store',
  '.cargo',
  '.DS_Store'
];
async function recurseDirectory(path, depth) {
  logover.info(`|${' '.repeat(depth * 2)}|-- ${path}`);
  depth++;
  const files = await readdir(path, { withFileTypes: true });
  for (const file of files) {
    if (!IGNORE.includes(file.name)) {
      if (file.isDirectory()) {
        await recurseDirectory(join(path, file.name), depth);
      } else {
        logover.info(`|${' '.repeat(depth * 2)}|-- ${file.name}`);
      }
    }
  }
}
