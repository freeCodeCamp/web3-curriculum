import { writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { promisify } from "util";
import { exec } from "child_process";
import { readdirSync } from "fs";
const execute = promisify(exec);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Adds all existing paths at runtime
const PERMANENT_PATHS_IN_ROOT = readdirSync("..");

export async function setVSCSettings(obj) {
  const settings = await import("../../.vscode/settings.json", {
    assert: { type: "json" },
  }).default;
  const updated = {
    ...settings,
    ...obj,
  };
  const pathToSettings = join("../../", ".vscode", "settings.json");
  await writeFile(pathToSettings, JSON.stringify(updated));
}

export async function hideFile(file) {
  // Get `files.exclude`
  const filesExclude = (
    await import("../../.vscode/settings.json", { assert: { type: "json" } })
  ).default["files.exclude"];
  filesExclude[file] = true;
  await setVSCSettings(filesExclude);
}

export async function showFile(file) {
  // Get `files.exclude`
  const filesExclude = (
    await import("../../.vscode/settings.json", { assert: { type: "json" } })
  ).default["files.exclude"];
  filesExclude[file] = false;
  await setVSCSettings(filesExclude);
}

export async function dumpProjectDirectoryIntoRoot(project) {
  const pathToRoot = join(__dirname, "..");
  await execute(`cp ${project.dashedName}/* .`, {
    cwd: pathToRoot,
    shell: "/bin/bash",
  });
}

export async function cleanWorkingDirectory(projectToCopyTo) {
  if (projectToCopyTo) {
    await copyNonWDirToProject(projectToCopyTo);
  }
  const pathToRoot = join(__dirname, "..");
  const stringOfPathsToKeep = PERMANENT_PATHS_IN_ROOT.join("|");
  await execute(`rm -r !(${stringOfPathsToKeep})`, {
    cwd: pathToRoot,
    shell: "/bin/bash",
  });
}

async function copyNonWDirToProject(project) {
  const pathToRoot = join(__dirname, "..");
  await execute(
    `cp -r !(${PERMANENT_PATHS_IN_ROOT.join("|")}|${project}) ${project}`,
    {
      cwd: pathToRoot,
      shell: "/bin/bash",
    }
  );
}
