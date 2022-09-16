// This file handles the fetching/parsing of the Git status of the project
import { promisify } from 'util';
import { exec } from 'child_process';
import { getState, setState } from '../env.js';
import { logover } from '../logger.js';
const execute = promisify(exec);

/**
 * Runs the following commands:
 *
 * ```bash
 * git add .
 * git commit --allow-empty -m "(<lesson_number>)"
 * ```
 *
 * @param {number} lessonNumber
 * @returns {Promise<void>}
 */
export async function commit(lessonNumber) {
  try {
    const { stdout, stderr } = await execute(
      `git add . && git commit --allow-empty -m "(${lessonNumber})"`
    );
    if (stderr) {
      logover.error('Failed to commit lesson: ', lessonNumber);
      throw new Error(stderr);
    }
  } catch (e) {
    return Promise.reject(e);
  }
  return Promise.resolve();
}

/**
 * Initialises a new branch for the `CURRENT_PROJECT`
 * @returns {Promise<void>}
 */
export async function initCurrentProjectBranch() {
  const { currentProject } = await getState();
  try {
    const { stdout, stderr } = await execute(
      `git checkout -b ${currentProject}`
    );
    // SILlY GIT PUTS A BRANCH SWITCH INTO STDERR!!!
    // if (stderr) {
    //   throw new Error(stderr);
    // }
  } catch (e) {
    return Promise.reject(e);
  }
  return Promise.resolve();
}

/**
 * Returns the commit hash of the branch `origin/<CURRENT_PROJECT>`
 * @param {number} number
 * @returns {Promise<string>}
 */
export async function getCommitHashByNumber(number) {
  const { lastKnownLessonWithHash, currentProject } = await getState();
  try {
    const { stdout, stderr } = await execute(
      `git log origin/${currentProject} --oneline --grep="(${number})" --`
    );
    if (stderr) {
      throw new Error(stderr);
    }
    const hash = stdout.match(/\w+/)?.[0];
    // This keeps track of the latest known commit in case there are no commits from one lesson to the next
    if (!hash) {
      return getCommitHashByNumber(lastKnownLessonWithHash);
    }
    await setState({ lastKnownLessonWithHash: number });
    return hash;
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * Aborts and in-progress `cherry-pick`
 * @returns {Promise<void>}
 */
async function ensureNoUnfinishedGit() {
  try {
    const { stdout, stderr } = await execute(`git cherry-pick --abort`);
    // Throwing in a `try` probably does not make sense
    if (stderr) {
      throw new Error(stderr);
    }
  } catch (e) {
    return Promise.reject(e);
  }
  return Promise.resolve();
}

/**
 * Git cleans the current branch, then `cherry-pick`s the commit hash found by `lessonNumber`
 * @param {number} lessonNumber
 * @returns {Promise<void>}
 */
export async function setFileSystemToLessonNumber(lessonNumber) {
  await ensureNoUnfinishedGit();
  const endHash = await getCommitHashByNumber(lessonNumber);
  const firstHash = await getCommitHashByNumber(1);
  try {
    // TODO: Continue on this error? Or, bail?
    if (!endHash || !firstHash) {
      throw new Error('Could not find commit hash');
    }
    // VOLUME BINDING?
    //
    // TODO: Probably do not want to always completely clean for each lesson
    if (firstHash === endHash) {
      await execute(`git clean -f -q -- . && git cherry-pick ${endHash}`);
    } else {
      // TODO: Why not git checkout ${endHash}
      const { stdout, stderr } = await execute(
        `git clean -f -q -- . && git cherry-pick ${firstHash}^..${endHash}`
      );
      if (stderr) {
        throw new Error(stderr);
      }
    }
  } catch (e) {
    return Promise.reject(e);
  }
  return Promise.resolve();
}

/**
 * Pushes the `<CURRENT_PROJECT>` branch to `origin`
 * @returns {Promise<void>}
 */
export async function pushProject() {
  const { currentProject } = await getState();
  try {
    const { stdout, stderr } = await execute(
      `git push origin ${currentProject} --force`
    );
    // if (stderr) {
    //   throw new Error(stderr);
    // }
  } catch (e) {
    logover.error('Failed to push project ', currentProject);
    return Promise.reject(e);
  }
  return Promise.resolve();
}

/**
 * Checks out the `main` branch
 *
 * **IMPORTANT**: This function restores any/all git changes that are uncommitted.
 * @returns {Promise<void>}
 */
export async function checkoutMain() {
  try {
    await execute('git restore .');
    const { stdout, stderr } = await execute(`git checkout main`);
    // if (stderr) {
    //   throw new Error(stderr);
    // }
  } catch (e) {
    return Promise.reject(e);
  }
  return Promise.resolve();
}

/**
 * If the given branch is found to exist, deletes the branch
 * @param {string} branch
 * @returns {Promise<void>}
 */
export async function deleteBranch(branch) {
  const isBranchExists = await branchExists(branch);
  if (!isBranchExists) {
    return Promise.resolve();
  }
  logover.warn('Deleting branch ', branch);
  try {
    await checkoutMain();
    const { stdout, stderr } = await execute(`git branch -D ${branch}`);
    logover.info(stdout);
    // if (stderr) {
    //   throw new Error(stderr);
    // }
  } catch (e) {
    logover.error('Failed to delete branch: ', branch);
    return Promise.reject(e);
  }
  return Promise.resolve();
}

/**
 * Checks if the given branch exists
 * @param {string} branch
 * @returns {Promise<boolean>}
 */
export async function branchExists(branch) {
  try {
    const { stdout, stderr } = await execute(`git branch --list ${branch}`);
    return Promise.resolve(stdout.includes(branch));
  } catch (e) {
    return Promise.reject(e);
  }
}
