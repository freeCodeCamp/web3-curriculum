// This file contains the parser for the markdown lessons
import { readFile } from 'fs/promises';
import { createReadStream } from 'fs';
import { createInterface } from 'readline';

const DESCRIPTION_MARKER = '### --description--';
const TEST_MARKER = '### --tests--';
const SEED_MARKER = '### --seed--';
const BEFORE_ALL_MARKER = '### --before-all--';
const AFTER_ALL_MARKER = '### --after-all--';
const BEFORE_EACH_MARKER = '### --before-each--';
const NEXT_MARKER_REG = `\n###? --`;
const CMD_MARKER = '#### --cmd--';
const FILE_MARKER_REG = '(?<=#### --")[^"]+(?="--)';

/**
 * Reads the first line of the file to get the project name
 * @param {string} file - The relative path to the locale file
 * @returns {Promise<string>} The project name
 */
export async function getProjectTitle(file) {
  const readable = createReadStream(file);
  const reader = createInterface({ input: readable });
  const firstLine = await new Promise(resolve => {
    reader.on('line', line => {
      reader.close();
      resolve(line);
    });
  });
  readable.close();
  const proj = firstLine.replace('# ', '').split(' - ');
  if (!proj[0] || !proj[1]) {
    throw new Error('Invalid project title. See example format.');
  }
  return { projectTopic: proj[0], currentProject: proj[1] };
}

/**
 * Gets all content within a lesson
 * @param {string} file - The relative path to the english locale file
 * @param {number} lessonNumber - The number of the lesson
 * @returns {Promise<string>} The content of the lesson
 */
export async function getLessonFromFile(file, lessonNumber = 1) {
  const fileContent = await readFile(file, 'utf8');
  const mat = fileContent.match(
    new RegExp(
      `## ${lessonNumber}\n(.*?)\n## (${lessonNumber + 1}|--fcc-end--)`,
      's'
    )
  );
  const lesson = mat?.[1];
  return lesson;
}

/**
 * Gets the description of the lesson
 * @param {string} lesson - The lesson content
 * @returns {string | null} The description of the lesson
 */
export function getLessonDescription(lesson) {
  const description = parseMarker(DESCRIPTION_MARKER, lesson);
  return description ?? null;
}

/**
 * Gets the hints and tests of the lesson
 * @param {string} lesson - The lesson content
 * @returns {[string, string]} An array of [hint, test]
 */
export function getLessonHintsAndTests(lesson) {
  const testsString = parseMarker(TEST_MARKER, lesson);
  const hintsAndTestsArr = [];
  const hints = testsString?.match(/^(.*?)$(?=\n+```js)/gm).filter(Boolean);
  const tests = testsString.match(/(?<=```js\n).*?(?=```)/gms);

  if (hints?.length) {
    for (let i = 0; i < hints.length; i++) {
      hintsAndTestsArr.push([hints[i], tests[i]]);
    }
  }
  return hintsAndTestsArr;
}

/**
 * Gets the seed of the lesson. If none is found, returns `null`.
 * @param {string} lesson - The lesson content
 * @returns {string | null} The seed of the lesson
 */
export function getLessonSeed(lesson) {
  const seed = parseMarker(SEED_MARKER, lesson);
  return seed ?? null;
}

/**
 * Gets the command/script to run before running the lesson tests
 * @param {string} lesson - The lesson content
 * @returns {string | null} The command to run before running the lesson tests
 */
export function getBeforeAll(lesson) {
  const beforeAll = parseMarker(BEFORE_ALL_MARKER, lesson);
  if (!beforeAll) return null;
  const beforeAllCommand = extractStringFromCode(beforeAll);
  return beforeAllCommand ?? null;
}

/**
 * Gets the command/script to run before running each lesson test
 * @param {string} lesson - The lesson content
 * @returns {string | null} The command to run before running each lesson test
 */
export function getBeforeEach(lesson) {
  const beforeEach = parseMarker(BEFORE_EACH_MARKER, lesson);
  if (!beforeEach) return null;
  const beforeEachCommand = extractStringFromCode(beforeEach);
  return beforeEachCommand ?? null;
}

/**
 * Gets the command/script to run after running the lesson tests
 * @param {string} lesson - The lesson content
 * @returns {string} The command to run after running the lesson tests
 */
export function getAfterAll(lesson) {
  const afterAll = parseMarker(AFTER_ALL_MARKER, lesson);
  if (!afterAll) return null;
  const afterAllCommand = extractStringFromCode(afterAll);
  return afterAllCommand ?? null;
}

/**
 * Gets any commands of the lesson seed. If none is found, returns an empty array.
 * @param {string} seed - The seed content
 * @returns {string[]} The commands of the lesson in order
 */
export function getCommands(seed) {
  const cmds = seed.match(new RegExp(`${CMD_MARKER}\n(.*?\`\`\`\n)`, 'gs'));
  const commands = cmds?.map(cmd => extractStringFromCode(cmd)?.trim());
  return commands ?? [];
}

/**
 * Gets any seed for specified files of the lesson seed. If none is found, returns an empty array.
 * @param {string} seed - The seed content
 * @returns {[string, string][]} [[filePath, fileSeed]]
 */
export function getFilesWithSeed(seed) {
  const files = seed.match(
    new RegExp(`#### --"([^"]+)"--\n(.*?\`\`\`\n)`, 'gs')
  );
  const filePaths = seed.match(new RegExp(FILE_MARKER_REG, 'gsm'));
  const fileSeeds = files?.map(file => extractStringFromCode(file)?.trim());

  const pathAndSeedArr = [];
  if (filePaths?.length) {
    for (let i = 0; i < filePaths.length; i++) {
      pathAndSeedArr.push([filePaths[i], fileSeeds[i]]);
    }
  }
  return pathAndSeedArr;
}

/**
 * Returns `boolean` for if lesson seed contains `force` flag
 * @param {string} seed - The seed content
 * @returns {boolean} Whether the seed has the `force` flag
 */
export function isForceFlag(seed) {
  return seed.includes('#### --force--');
}

/**
 * Returns a string stripped from the input codeblock
 * @param {string} code - The codeblock to strip
 * @returns {string} The stripped codeblock
 */
export function extractStringFromCode(code) {
  return code.replace(/.*?```[a-z]+\n(.*?)```.*/s, '$1');
}

/**
 * Return the total number of lessons for a given project
 * @param {string} file - The relative path to the english locale file
 * @returns {Promise<number>} The stripped codeblock
 */
export async function getTotalLessons(file) {
  const fileContent = await readFile(file, 'utf-8');
  const lessonNumbers = fileContent.match(/## \d+/g);
  const numberOfLessons = lessonNumbers.length;
  return numberOfLessons;
}

/**
 * Returns the content within the given marker of the lesson
 * @param {string} marker
 * @param {string} lesson
 * @returns {string | undefined} content or `undefined`
 */
function parseMarker(marker, lesson) {
  const mat = lesson.match(
    new RegExp(`${marker}\n(((?!${NEXT_MARKER_REG}).)*\n?)`, 's')
  );
  return mat?.[1];
}

/**
 * Returns a generator on the seed for ordered execution
 * @param {string} seed The lesson seed
 */
export function* seedToIterator(seed) {
  const sections = seed.match(new RegExp(`#### --(((?!#### --).)*\n?)`, 'sg'));
  for (const section of sections) {
    const isFile = section.match(
      new RegExp(`#### --"([^"]+)"--\n(.*?\`\`\`\n)`, 's')
    );
    const isCMD = section.match(new RegExp(`#### --cmd--\n(.*?\`\`\`\n)`, 's'));
    if (isFile) {
      const filePath = isFile[1];
      const fileSeed = extractStringFromCode(isFile[2])?.trim();

      yield { filePath, fileSeed };
    } else if (isCMD) {
      yield extractStringFromCode(isCMD[1])?.trim();
    } else {
      throw new Error('Seed is malformed');
    }
  }
}
