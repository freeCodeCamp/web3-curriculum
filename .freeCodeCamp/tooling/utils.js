import { writeFile } from "fs/promises";
import { dirname, join } from "path";
import { promisify } from "util";
import { exec } from "child_process";
const execute = promisify(exec);

// TODO: Need to add directories too.
const PERMANENT_FILES_IN_ROOT = [
  ".gitignore",
  ".gitpod.Dockerfile",
  ".gitpod.yml",
  "LICENSE",
  "README.md",
];

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
  const pathToRoot = join(dirname(), "..");
  await execute(`cp ${project.dashedName}/* .`, {
    cwd: pathToRoot,
    shell: "/bin/bash",
  });
}

export async function clearWorkingDirectory() {
  const pathToRoot = join(dirname(), "..");
  const stringOfFilesToKeep = PERMANENT_FILES_IN_ROOT.join("|");
  await execute(`rm -r !(${stringOfFilesToKeep})`, {
    cwd: pathToRoot,
    shell: "/bin/bash",
  });
}
