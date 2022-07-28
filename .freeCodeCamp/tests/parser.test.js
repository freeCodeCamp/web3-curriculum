import {
  getProjectTitle,
  getLessonFromFile,
  getLessonDescription,
  getLessonHintsAndTests,
  getLessonSeed,
  getBeforeAll,
  getBeforeEach,
  getCommands,
  getFilesWithSeed,
  isForceFlag,
  extractStringFromCode
} from '../tooling/parser.js';
import { assert } from 'chai';
import logover, { debug, error } from 'logover';

logover({
  debug: '\x1b[33m[parser.test]\x1b[0m',
  error: '\x1b[31m[parser.test]\x1b[0m',
  level: 'debug',
  timestamp: null
});

const EXPECTED_PATH = './tests/fixtures/expected-format.md';
const POOR_PATH = './tests/fixtures/valid-poor-format.md';

try {
  const projectTitle = await getProjectTitle(EXPECTED_PATH);
  assert.deepEqual(projectTitle, {
    projectTopic: 'Title',
    currentProject: 'Project'
  });
  const lesson = await getLessonFromFile(EXPECTED_PATH);

  const lessonDescription = getLessonDescription(lesson);
  assert.equal(
    lessonDescription,
    '\nSome description.\n\nMaybe some code:\n\n```js\nconst a = 1;\n// A comment at the end?\n```\n'
  );

  const lessonHintsAndTests = getLessonHintsAndTests(lesson);

  assert.equal(lessonHintsAndTests[0][0], 'Test text with many words.');
  assert.equal(
    lessonHintsAndTests[0][1],
    "// First test code\nconst a = 'test';\n"
  );
  assert.equal(
    lessonHintsAndTests[1][0],
    'Second test text with `inline-code`.'
  );
  assert.equal(
    lessonHintsAndTests[1][1],
    "const a = 'test2';\n// Second test code;\n"
  );

  const lessonSeed = getLessonSeed(lesson);

  const beforeAll = getBeforeAll(lesson);
  assert.equal(beforeAll, "global.__beforeAll = 'before-all';\n\n\n");

  const beforeEach = getBeforeEach(lesson);
  assert.equal(beforeEach, "global.__beforeEach = 'before-each';\n");

  const commands = getCommands(lessonSeed);

  const filesWithSeed = getFilesWithSeed(lessonSeed);

  const isForce = isForceFlag(lessonSeed);
} catch (e) {
  throw error(e);
}

// -----------------
// VALID POOR FORMAT
// -----------------

try {
  const projectTitle = await getProjectTitle(POOR_PATH);
  assert.deepEqual(projectTitle, {
    projectTopic: 'Title',
    currentProject: 'Project'
  });
  const lesson = await getLessonFromFile(POOR_PATH);

  const lessonDescription = getLessonDescription(lesson);
  assert.equal(
    lessonDescription,
    'This description has no spaces between the heading.\n```rs\n\n//Same goes for this code.\nlet mut a = 1;\n// comment\n```'
  );

  const lessonHintsAndTests = getLessonHintsAndTests(lesson);

  assert.equal(lessonHintsAndTests[0][0], 'Test text at top.');
  assert.equal(
    lessonHintsAndTests[0][1],
    '// First test no space\n// No code?\n\n'
  );
  assert.equal(
    lessonHintsAndTests[1][0],
    'Second test text with `inline-code`.'
  );
  assert.equal(
    lessonHintsAndTests[1][1],
    "// Too many spaces?\nconst a = 'test2';\n"
  );

  const lessonSeed = getLessonSeed(lesson);

  const beforeAll = getBeforeAll(lesson);
  assert.equal(beforeAll, "global.__beforeAll = 'before-all';\n");

  const beforeEach = getBeforeEach(lesson);

  const commands = getCommands(lessonSeed);

  const filesWithSeed = getFilesWithSeed(lessonSeed);

  const isForce = isForceFlag(lessonSeed);
} catch (e) {
  throw error(e);
}

try {
  let stringFromCode = extractStringFromCode(`\`\`\`js
const a = 1;
\`\`\``);
  assert.equal(stringFromCode, 'const a = 1;\n');
  stringFromCode = extractStringFromCode(`\`\`\`js
const a = 1;
// comment
\`\`\`
`);
  assert.equal(stringFromCode, 'const a = 1;\n// comment\n\n');
} catch (e) {
  throw error(e);
}

debug('All tests passed! 🎉');
