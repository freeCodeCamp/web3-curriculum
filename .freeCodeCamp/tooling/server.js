import express from 'express';
import runTests from './test.js';
import {
  getProjectConfig,
  readEnv,
  setProjectConfig,
  updateEnv
} from './env.js';
import logover, { debug, error, warn } from 'logover';

import { WebSocketServer } from 'ws';
import runLesson from './lesson.js';
import { updateTests, updateHints, updateConsole } from './client-socks.js';
import hotReload from './hot-reload.js';
import projects from '../config/projects.json' assert { 'type': 'json' };
import { hideAll, showFile } from './utils.js';
logover({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug'
});

const app = express();

app.use(express.static('./dist'));

async function handleRunTests(ws, data) {
  const { CURRENT_PROJECT } = await readEnv();
  const project = await getProjectConfig(CURRENT_PROJECT);
  runTests(ws, project);
}

function handleResetProject(ws, data) {}
function handleResetLesson(ws, data) {}

async function handleGoToNextLesson(ws, data) {
  const { CURRENT_PROJECT } = await readEnv();
  const project = await getProjectConfig(CURRENT_PROJECT);
  const nextLesson = project.currentLesson + 1;
  setProjectConfig(CURRENT_PROJECT, { currentLesson: nextLesson });
  runLesson(ws, project);
  updateHints(ws, '');
  updateTests(ws, []);
  updateConsole(ws, '');
}

async function handleGoToPreviousLesson(ws, data) {
  const { CURRENT_PROJECT } = await readEnv();
  const project = await getProjectConfig(CURRENT_PROJECT);
  const prevLesson = project.currentLesson - 1;
  setProjectConfig(CURRENT_PROJECT, { CURRENT_LESSON: prevLesson });
  runLesson(ws, project);
  updateTests(ws, []);
  updateHints(ws, '');
  updateConsole(ws, '');
}

async function handleConnect(ws) {
  const { CURRENT_PROJECT } = await readEnv();
  if (!CURRENT_PROJECT) {
    return;
  }
  const project = await getProjectConfig(CURRENT_PROJECT);
  runLesson(ws, project);
}

async function handleSelectProject(ws, data) {
  const selectedProject = projects.find(p => p.id === data?.data?.id);
  // TODO: Should this set the CURRENT_PROJECT to `null` (empty string)?
  // for the case where the Camper has navigated to the landing page.
  await updateEnv({ CURRENT_PROJECT: selectedProject?.dashedName ?? '' });
  if (!selectedProject) {
    warn('Selected project does not exist: ', data);
    return;
  }
  await hideAll();
  await showFile(selectedProject.dashedName);
  runLesson(ws, selectedProject);
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
