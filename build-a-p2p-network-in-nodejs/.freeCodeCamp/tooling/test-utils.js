import { readFile, readdir } from "fs/promises";
import { promisify } from "util";
import { join } from "path";
import { exec } from "child_process";
const execute = promisify(exec);

const ROOT = ".";

async function getDirectory(path) {
  const files = await readdir(`${ROOT}/${path}`);
  return files;
}

/**
 * Checks if file is open in VSCode editor
 * @param {string} path Path to file
 * @returns {boolean}
 */
async function isFileOpen(path) {
  // TODO: Probably not possible
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return true;
}

async function getTerminalOutput() {
  const pathToTerminalLogs = join(`${ROOT}/.logs/.terminal-out.log`);
  const terminalLogs = await readFile(pathToTerminalLogs, "utf8");

  if (!terminalLogs) {
    throw new Error("No terminal logs found");
  }

  return terminalLogs;
}

/**
 * Returns stdout of a command called from a given path
 * @param {string} command
 * @param {string} path Path relative to curriculum folder
 * @returns
 */
async function getCommandOutput(command, path = "") {
  const { stdout } = await execute(command, {
    cwd: `${ROOT}/${path}`,
    shell: "/bin/bash",
  });
  return stdout;
}

/**
 * TODO
 */
async function getLastCommand(howManyBack = 0) {
  const pathToBashLogs = join(`${ROOT}/.logs/.bash_history.log`);
  const bashLogs = await readFile(pathToBashLogs, "utf8");

  if (!bashLogs) {
    throw new Error(`Could not find ${pathToBashLogs}`);
  }

  const logs = bashLogs.split("\n");
  const lastLog = logs[logs.length - howManyBack - 2];

  return lastLog;
}

// TODO: Do not return whole file
async function getCWD() {
  const pathToCWD = join(`${ROOT}/.logs/.cwd.log`);
  const cwd = await readFile(pathToCWD, "utf8");
  return cwd;
}

async function getFile(path) {
  const file = await readFile(`${ROOT}/${path}`, "utf8");
  return file;
}

const __helpers = {
  getDirectory,
  isFileOpen,
  getFile,
  getTerminalOutput,
  getCommandOutput,
  getLastCommand,
  getCWD,
};

export default __helpers;
