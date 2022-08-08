import { readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const ROOT = join(__dirname, '../..');

export async function readEnv() {
  let meta = {
    CURRENT_PROJECT: 'calculator',
    LOCALE: 'english'
  };
  try {
    const META = await readFile(join(ROOT, '.freeCodeCamp/.env'), 'utf8');
    const metaArr = META.split('\n').filter(Boolean);
    const new_meta = metaArr.reduce((meta, line) => {
      const [key, value] = line.split('=');
      return { ...meta, [key]: value };
    }, '');
    meta = { ...meta, ...new_meta };
  } catch (err) {
    console.error(err);
  }
  return meta;
}

export async function updateEnv(obj) {
  // TODO: Maybe not completely overwrite the file?
  const env = { ...(await readEnv()), ...obj };
  await writeFile(
    join(ROOT, '.freeCodeCamp/.env'),
    Object.entries(env).reduce((acc, [key, value]) => {
      return `${acc}\n${key}=${value}`;
    }, '')
  );
}

export async function getProjectConfig(project) {
  const projects = (
    await import(join(ROOT, '.freeCodeCamp/config/projects.json'), {
      assert: { type: 'json' }
    })
  ).default;
  const proj = projects.find(p => p.dashedName === project);

  const defaultConfig = {
    testPollingRate: 100,
    runTestsOnWatch: false,
    lastKnownLessonWithHash: 1,
    seedEveryLesson: false,
    useGitBuildOnProduction: false // TODO: Necessary?
  };
  if (!proj) {
    return defaultConfig;
  }
  return { ...defaultConfig, ...proj };
}

/**
 *
 * @param {string} project Project dashed name
 * @param {object} config Config properties to set
 */
export async function setProjectConfig(project, config = {}) {
  const projects = (
    await import(join(ROOT, '.freeCodeCamp/config/projects.json'), {
      assert: { type: 'json' }
    })
  ).default;
  const updatedProject = {
    ...projects.find(p => p.dashedName === project),
    ...config
  };
  const updatedProjects = projects.map(p =>
    p.dashedName === project ? updatedProject : p
  );
  await writeFile(
    join(ROOT, '.freeCodeCamp/config/projects.json'),
    updatedProjects
  );
}
