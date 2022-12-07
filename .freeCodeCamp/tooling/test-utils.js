import { readFile, readdir, mkdir } from 'fs/promises';
import { exec, execSync } from 'child_process';
import { promisify } from 'util';
import { join } from 'path';
import fs from 'fs';
import { ROOT } from './env.js';
import { logover } from './logger.js';
import { Logger } from 'logover';

// ---------------
// GENERIC HELPERS
// ---------------
const PATH_TERMINAL_OUT = join(ROOT, '.logs/.terminal-out.log');
const PATH_BASH_HISTORY = join(ROOT, '.logs/.bash_history.log');
const PATH_CWD = join(ROOT, '.logs/.cwd.log');
const PATH_TEMP = join(ROOT, '.logs/.temp.log');

/**
 * Get the `.logs/.terminal-out.log` file contents, or `throw` if not found
 * @returns {Promise<string>} The `.terminal-out.log` file contents
 */
async function getTerminalOutput() {
  const terminalLogs = await readFile(PATH_TERMINAL_OUT, 'utf8');
  if (!terminalLogs) {
    throw new Error(`Could not find ${PATH_TERMINAL_OUT}`);
  }
  return terminalLogs;
}

/**
 * Get the `.logs/.temp.log` file contents, or `throw` if not found
 * @returns {Promise<string>} The `.temp.log` file contents
 */
async function getTemp() {
  const tempLogs = await readFile(PATH_TEMP, 'utf8');
  if (!tempLogs) {
    throw new Error(`Could not find ${PATH_TEMP}`);
  }
  return tempLogs;
}

/**
 * Get the `.logs/.bash_history.log` file contents
 * @returns {Promise<string>}
 */
async function getBashHistory() {
  const bashHistory = await readFile(PATH_BASH_HISTORY, 'utf8');
  if (!bashHistory) {
    throw new Error(`Could not find ${PATH_CWD}`);
  }
  return bashHistory;
}

/**
 * Get the `.logs/.bash_history.log` file contents, or `throw` is not found
 * @param {number?} howManyBack The `nth` log from the history
 * @returns {Promise<string>}
 */
async function getLastCommand(howManyBack = 0) {
  const bashLogs = await getBashHistory();

  const logs = bashLogs.split('\n').filter(l => l !== '');
  const lastLog = logs[logs.length - howManyBack - 1];

  return lastLog;
}

/**
 * Get the `.logs/.cwd.log` file contents
 * @returns {Promise<string>}
 */
async function getCWD() {
  const cwd = await readFile(PATH_CWD, 'utf8');
  if (!cwd) {
    throw new Error(`Could not find ${PATH_CWD}`);
  }
  return cwd;
}

/**
 * Get the `.logs/.cwd.log` file contents, or `throw` is not found
 * @param {number} howManyBack The `nth` log from the current working directory history
 * @returns {Promise<string>}
 */
async function getLastCWD(howManyBack = 0) {
  const currentWorkingDirectory = await getCWD();

  const logs = currentWorkingDirectory.split('\n').filter(l => l !== '');
  const lastLog = logs[logs.length - howManyBack - 1];

  return lastLog;
}

/**
 * Get the contents of a directory
 * @param {string} path Path relative to root of working directory
 * @returns {Promise<string[]>} An array of file names
 */
async function getDirectory(path) {
  const files = await readdir(join(ROOT, path));
  return files;
}

/**
 * Create a directory
 * @param {string} path Path relative to root of working directory
 */
async function makeDirectory(path) {
  await mkdir(join(ROOT, path));
}

const execute = promisify(exec);
/**
 * Returns the output of a command called from a given path
 * @param {string} command
 * @param {string} path Path relative to root of working directory
 * @returns {Promise<{stdout, stderr}>}
 */
async function getCommandOutput(command, path = '') {
  try {
    const cmdOut = await execute(command, {
      cwd: join(ROOT, path),
      shell: '/bin/bash'
    });
    return cmdOut;
  } catch (err) {
    return err;
  }
}

/**
 * Get a file from the given `path`
 * @param {string} path Path relative to root of working directory
 * @returns {Promise<string>}
 */
async function getFile(path) {
  const file = await readFile(join(ROOT, path), 'utf8');
  return file;
}

/**
 * Check if given path exists
 * @param {string} path Path relative to root of working directory
 * @returns {boolean}
 */
function fileExists(path) {
  return fs.existsSync(join(ROOT, path));
}

/**
 * Copy the contents of a directory from one location to another
 * @param {string} folderToCopyPath Path to folder to copy relative to root
 * @param {string} destinationFolderPath Path to folder destination relative to root
 */
function copyDirectory(folderToCopyPath, destinationFolderPath) {
  const folderToCopy = join(ROOT, folderToCopyPath);
  const destinationFolder = join(ROOT, destinationFolderPath);

  if (!fs.existsSync(destinationFolder)) {
    fs.mkdirSync(destinationFolder);
  }

  fs.readdirSync(folderToCopy).forEach(file => {
    fs.copyFileSync(`${folderToCopy}/${file}`, `${destinationFolder}/${file}`);
  });
}

function copyProjectFiles(
  projectFolderPath,
  testsFolderPath,
  arrayOfFiles = []
) {
  const projectFolder = join(ROOT, projectFolderPath);
  const testsFolder = join(ROOT, testsFolderPath);

  if (!projectFolder || !testsFolder || arrayOfFiles.length === 0) {
    throw Error('Cannot copy project files');
  }

  arrayOfFiles.forEach(file => {
    fs.copyFileSync(`${projectFolder}/${file}`, `${testsFolder}/${file}`);
  });
}

/**
 *
 * @param {string} command Command string to run
 * @param {string} path Path relative to root to run command in
 */
function runCommand(command, path) {
  execSync(command, {
    cwd: join(ROOT, path),
    shell: '/bin/bash'
  });
}

/**
 *
 * @param {string} filePath Path to JSON file relative to root
 * @returns {object} `JSON.parse` file contents
 */
function getJsonFile(filePath) {
  const fileString = fs.readFileSync(join(ROOT, filePath));
  return JSON.parse(fileString);
}

/**
 *
 * @param {string} path Path to JSON file relative to root
 * @param {any} content Stringifiable content to write to `path`
 */
function writeJsonFile(path, content) {
  fs.writeFileSync(join(ROOT, path), JSON.stringify(content, null, 2));
}

/**
 * @typedef ControlWrapperOptions
 * @type {object}
 * @property {number} timeout
 * @property {number} stepSize
 */

/**
 * Wraps a function in an interval to retry until it succeeds
 * @param {callback} cb Callback to wrap
 * @param {ControlWrapperOptions} options Options to pass to `ControlWrapper`
 * @returns {Promise<any>} Returns the result of the callback or `null`
 */
async function controlWrapper(cb, { timeout = 10000, stepSize = 250 }) {
  return new Promise((resolve, reject) => {
    const interval = setInterval(async () => {
      try {
        const response = await cb();
        if (response) {
          clearInterval(interval);
          resolve(response);
        }
      } catch (e) {
        logover.error(e);
      }
    }, stepSize);
    setTimeout(() => {
      clearInterval(interval);
      reject(null);
    }, timeout);
  });
}

const logoverHelp = new Logger({ level: 'debug' });

const __helpers = {
  controlWrapper,
  copyDirectory,
  copyProjectFiles,
  fileExists,
  getBashHistory,
  getCommandOutput,
  getCWD,
  getDirectory,
  makeDirectory,
  getFile,
  getJsonFile,
  getLastCommand,
  getLastCWD,
  getTemp,
  getTerminalOutput,
  logover: logoverHelp,
  runCommand,
  writeJsonFile
};

export default __helpers;
