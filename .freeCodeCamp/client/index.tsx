import { createRoot } from 'react-dom/client';
import { Suspense, useState, useEffect } from 'react';
import {
  ConsoleError,
  Events,
  FreeCodeCampConfigI,
  ProjectI,
  TestType
} from './types/index';
import { Loader } from './components/loader';
import { Landing } from './templates/landing';
import { Project } from './templates/project';
import { parseMarkdown, parse } from './utils/index';
import { Header } from './components/header';
import './styles.css';
import { E44o5 } from './components/error';

let socket: WebSocket;
if (process.env.GITPOD_WORKSPACE_URL) {
  socket = new WebSocket(
    process.env.GITPOD_WORKSPACE_URL.replace(/^https:\/\//, 'wss://8080-') + ''
  );
} else {
  socket = new WebSocket('ws://localhost:8080');
}

const App = () => {
  const [projects, setProjects] = useState<ProjectI[]>([]);
  const [freeCodeCampConfig, setFreeCodeCampConfig] =
    useState<FreeCodeCampConfigI>({});
  const [project, setProject] = useState<ProjectI | null>(null);
  const [topic, setTopic] = useState('');

  const [lessonNumber, setLessonNumber] = useState(1);
  const [description, setDescription] = useState('');
  const [tests, setTests] = useState<TestType[]>([]);
  const [hints, setHints] = useState('');
  const [cons, setCons] = useState<ConsoleError[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [alertCamper, setAlertCamper] = useState<null | string>(null);
  const [error, setError] = useState<Error | null>(null);

  const [debouncers, setDebouncers] = useState<string[]>([]);
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    socket.onopen = function (_event) {
      setConnected(true);
      sock(Events.CONNECT);
    };
    socket.onmessage = function (event) {
      const parsedData: { event: keyof typeof handle; data: any } = parse(
        event.data
      );
      handle[parsedData.event]?.(parsedData.data);
    };
    socket.onclose = function (_event) {
      setAlertCamper('Client has disconnected from local server');
      setConnected(false);
    };

    return () => {
      console.log('socket closing');
      socket.close();
    };
  }, []);

  const handle = {
    'handle-project-finish': handleProjectFinish,
    'toggle-loader-animation': toggleLoaderAnimation,
    'update-test': updateTest,
    'update-tests': updateTests,
    'update-hints': updateHints,
    'update-console': updateConsole,
    'update-description': updateDescription,
    'update-project-heading': updateProjectHeading,
    'update-project': setProject,
    'update-projects': setProjects,
    'update-freeCodeCamp-config': setFreeCodeCampConfig,
    'update-error': updateError,
    'reset-tests': resetTests,
    RESPONSE: debounce
  };

  function handleProjectFinish() {
    // Send Camper to landing page
    updateProject(null);
  }

  useEffect(() => {
    if (connected) {
      sock(Events.REQUEST_DATA, { request: 'projects' });
    }
  }, [project]);

  function debounce({ event }: { event: string }) {
    const debouncerRemoved = debouncers.filter(d => d !== event);
    setDebouncers(() => debouncerRemoved);
  }

  function sock(type: Events, data = {}) {
    if (debouncers.includes(type)) {
      return;
    }
    const newDebouncers = [...debouncers, type];
    setDebouncers(() => newDebouncers);
    socket.send(parse({ event: type, data }));
  }

  function updateProject(project: ProjectI | null) {
    sock(Events.SELECT_PROJECT, { id: project?.id });
    resetState();
    setProject(project);
  }

  function updateProjectHeading({
    projectTopic,
    lessonNumber
  }: {
    projectTopic: string;
    lessonNumber: number;
  }) {
    setTopic(projectTopic);
    setLessonNumber(lessonNumber);
  }

  function updateDescription({ description }: { description: string }) {
    setDescription(parseMarkdown(description));
  }

  function updateTests({ tests }: { tests: TestType[] }) {
    setTests(tests);
  }
  function updateTest({ test }: { test: TestType }) {
    setTests(ts => ts.map(t => (t.testId === test.testId ? test : t)));
  }
  function updateHints({ hints }: { hints: string }) {
    setHints(parseMarkdown(hints));
  }

  function updateConsole({ cons }: { cons: ConsoleError }) {
    if (!Object.keys(cons).length) {
      return setCons([]);
    }
    // Insert cons in array at index `id`
    setCons(prev => {
      const sorted = [
        ...prev.slice(0, cons.testId),
        cons,
        ...prev.slice(cons.testId)
      ].filter(Boolean);
      return sorted;
    });
  }

  function updateError({ error }: { error: Error }) {
    setError(error);
  }

  function resetTests() {
    setTests([]);
  }

  function resetState() {
    setTests([]);
    setHints('');
    setCons([]);
  }

  function toggleLoaderAnimation() {
    setIsLoading(prev => !prev);
  }

  function runTests() {
    setCons([]);
    sock(Events.RUN_TESTS);
  }
  function resetProject() {
    sock(Events.RESET_PROJECT);
  }
  function goToNextLesson() {
    sock(Events.GO_TO_NEXT_LESSON);
  }
  function goToPreviousLesson() {
    sock(Events.GO_TO_PREVIOUS_LESSON);
  }

  if (alertCamper) {
    return (
      <>
        <Header updateProject={updateProject} />
        <E44o5 text={alertCamper} error={error} />
      </>
    );
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header updateProject={updateProject} />
        {project ? (
          <Project
            {...{
              project,
              topic,
              lessonNumber,
              description,
              tests,
              hints,
              cons,
              isLoading,
              runTests,
              resetProject,
              goToNextLesson,
              goToPreviousLesson
            }}
          />
        ) : (
          <Landing {...{ topic, sock, projects, freeCodeCampConfig }} />
        )}
      </Suspense>
    </>
  );
};

const container = document.getElementById('root');
if (!container) throw Error('Element #root not found to mount to');
const root = createRoot(container);
root.render(<App />);
