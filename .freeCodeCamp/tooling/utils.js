import { cp, readdir, rm, rmdir, writeFile } from 'fs/promises';
import path, { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';
import { exec } from 'child_process';
import { readdirSync } from 'fs';
const execute = promisify(exec);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Adds all existing paths at runtime
const PERMANENT_PATHS_IN_ROOT = readdirSync('..');

export async function setVSCSettings(obj) {
  const settings = (
    await import('../../.vscode/settings.json', {
      assert: { type: 'json' }
    })
  ).default;
  const updated = {
    ...settings,
    ...obj
  };
  const pathToSettings = join(__dirname, '../..', '.vscode', 'settings.json');
  await writeFile(pathToSettings, JSON.stringify(updated, null, 2));
}

export async function hideFile(file) {
  // Get `files.exclude`
  const filesExclude = (
    await import('../../.vscode/settings.json', { assert: { type: 'json' } })
  ).default['files.exclude'];
  filesExclude[file] = true;
  await setVSCSettings({ 'files.exclude': filesExclude });
}

export async function showFile(file) {
  // Get `files.exclude`
  const filesExclude = (
    await import('../../.vscode/settings.json', { assert: { type: 'json' } })
  ).default['files.exclude'];
  filesExclude[file] = false;
  await setVSCSettings({ 'files.exclude': filesExclude });
}

export async function hideAll() {
  const filesExclude = (
    await import('../../.vscode/settings.json', { assert: { type: 'json' } })
  ).default['files.exclude'];
  for (const file of Object.keys(filesExclude)) {
    filesExclude[file] = true;
  }
  await setVSCSettings({ 'files.exclude': filesExclude });
}

export async function dumpProjectDirectoryIntoRoot(project) {
  const pathToRoot = join(__dirname, '../..');
  await cp(join(pathToRoot, project.dashedName), pathToRoot, {
    recursive: true
  });
}

export async function cleanWorkingDirectory(projectToCopyTo) {
  if (projectToCopyTo) {
    await copyNonWDirToProject(projectToCopyTo);
  }
  const pathToRoot = join(__dirname, '../..');
  const allOtherPaths = (await readdir(pathToRoot)).filter(
    p => !PERMANENT_PATHS_IN_ROOT.includes(p)
  );
  allOtherPaths.forEach(async p => {
    await rm(join(pathToRoot, p), { recursive: true });
  });
}

async function copyNonWDirToProject(project) {
  const pathToRoot = join(__dirname, '../..');
  const allOtherPaths = (await readdir(pathToRoot)).filter(
    p => !PERMANENT_PATHS_IN_ROOT.includes(p)
  );
  allOtherPaths.forEach(async p => {
    const relativePath = join(pathToRoot, p);
    await cp(relativePath, join(pathToRoot, project, p), {
      recursive: true,
      force: true
    });
  });
}
