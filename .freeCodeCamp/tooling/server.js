import express from 'express';
import { readFile } from 'fs/promises';
import runTests from './test.js';
import {
  getProjectConfig,
  getState,
  ROOT,
  setProjectConfig,
  setState,
  getConfig
} from './env.js';
import logover, { debug, error, warn } from 'logover';

import { WebSocketServer } from 'ws';
import runLesson from './lesson.js';
import {
  updateTests,
  updateHints,
  updateConsole,
  updateProjects,
  updateFreeCodeCampConfig
} from './client-socks.js';
import hotReload from './hot-reload.js';
import { hideAll, showFile, showAll } from './utils.js';
import { join } from 'path';
logover({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug'
});
const freeCodeCampConfig = await getConfig();

const app = express();

app.use(express.static(join(ROOT, '.freeCodeCamp/dist')));

async function handleRunTests(ws, data) {
  const { currentProject } = await getState();
  await runTests(ws, currentProject);
  ws.send(parse({ data: { event: data.event }, event: 'RESPONSE' }));
}

function handleResetProject(ws, data) {}
function handleResetLesson(ws, data) {}

async function handleGoToNextLesson(ws, data) {
  const { currentProject } = await getState();
  const project = await getProjectConfig(currentProject);
  const nextLesson = project.currentLesson + 1;
  await setProjectConfig(currentProject, { currentLesson: nextLesson });
  await runLesson(ws, project.dashedName);
  updateHints(ws, '');
  updateTests(ws, []);
  updateConsole(ws, '');
  ws.send(parse({ data: { event: data.event }, event: 'RESPONSE' }));
}

async function handleGoToPreviousLesson(ws, data) {
  const { currentProject } = await getState();
  const project = await getProjectConfig(currentProject);
  const prevLesson = project.currentLesson - 1;
  await setProjectConfig(currentProject, { currentLesson: prevLesson });
  await runLesson(ws, project.dashedName);
  updateTests(ws, []);
  updateHints(ws, '');
  updateConsole(ws, '');
  ws.send(parse({ data: { event: data.event }, event: 'RESPONSE' }));
}

async function handleConnect(ws) {
  const projects = JSON.parse(
    await readFile(
      join(ROOT, freeCodeCampConfig.config['projects.json']),
      'utf-8'
    )
  );
  updateProjects(ws, projects);
  updateFreeCodeCampConfig(ws, freeCodeCampConfig);
  const { currentProject } = await getState();
  if (!currentProject) {
    return;
  }
  const project = await getProjectConfig(currentProject);
  runLesson(ws, project.dashedName);
}

async function handleSelectProject(ws, data) {
  const projects = JSON.parse(
    await readFile(
      join(ROOT, freeCodeCampConfig.config['projects.json']),
      'utf-8'
    )
  );
  const selectedProject = projects.find(p => p.id === data?.data?.id);
  // TODO: Should this set the currentProject to `null` (empty string)?
  // for the case where the Camper has navigated to the landing page.
  await setState({ currentProject: selectedProject?.dashedName ?? null });
  if (!selectedProject && !data?.data?.id) {
    warn('Selected project does not exist: ', data);
    return ws.send(parse({ data: { event: data.event }, event: 'RESPONSE' }));
  }

  // Disabled whilst in development because it is annoying
  if (process.env.NODE_ENV === 'production') {
    await hideAll();
    await showFile(selectedProject.dashedName);
  } else {
    await showAll();
  }
  await runLesson(ws, selectedProject.dashedName);
  return ws.send(parse({ data: { event: data.event }, event: 'RESPONSE' }));
}

const server = app.listen(8080, () => {
  console.log('Listening on port 8080');
});

const handle = {
  connect: (ws, data) => {
    handleConnect(ws);
  },
  'run-tests': handleRunTests,
  'reset-project': handleResetProject,
  'go-to-next-lesson': handleGoToNextLesson,
  'go-to-previous-lesson': handleGoToPreviousLesson,
  'select-project': handleSelectProject
};

const wss = new WebSocketServer({ server });

wss.on('connection', function connection(ws) {
  hotReload(ws);
  ws.on('message', function message(data) {
    const parsedData = parseBuffer(data);
    handle[parsedData.event]?.(ws, parsedData);
  });
  (async () => {
    const projects = JSON.parse(
      await readFile(
        join(ROOT, freeCodeCampConfig.config['projects.json']),
        'utf-8'
      )
    );
    updateProjects(ws, projects);
    updateFreeCodeCampConfig(ws, freeCodeCampConfig);
  })();
  sock('connect', { message: "Server says 'Hello!'" });

  function sock(type, data = {}) {
    ws.send(parse({ event: type, data }));
  }
});

function parse(obj) {
  return JSON.stringify(obj);
}

function parseBuffer(buf) {
  return JSON.parse(buf.toString());
}

/**
 * Files currently under ownership by another thread.
 */
const RACING_FILES = new Set();
const FREEDOM_TIMEOUT = 100;

/**
 * Adds an operation to the race queue. If a file is already in the queue, the op is delayed until the file is released.
 * @param {string} filepath Path to file to move
 * @param {*} cb Callback to call once file is free
 */
async function addToRaceQueue(filepath, cb) {
  const isFileFree = await new Promise(resolve => {
    setTimeout(() => {
      if (!RACING_FILES.has(filepath)) {
        resolve(true);
      }
    }, FREEDOM_TIMEOUT);
  });
  if (isFileFree) {
    RACING_FILES.add(filepath);
    cb();
  }
}
