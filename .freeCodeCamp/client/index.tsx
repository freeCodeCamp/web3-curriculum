import { render } from "react-dom";
import { useEffect, useState, StrictMode, lazy, Suspense } from "react";
import "./styles.css";
const IntegratedOrProject = lazy(() => {
  return process.env.INTEGRATED_PROJECT === "true"
    ? import("./templates/integrated-project")
    : import("./templates/project");
});
import { Events, TestType } from "./types/index";
import { parseMarkdown } from "./utils";
import Loader from "./components/loader";

let socket: WebSocket;
if (process.env.GITPOD_WORKSPACE_URL) {
  socket = new WebSocket(
    process.env.GITPOD_WORKSPACE_URL.replace(/^https:\/\//, "wss://8080-") + ""
  );
} else {
  socket = new WebSocket("ws://localhost:8080");
}

const App = () => {
  const [topic, setTopic] = useState("");
  const [project, setProject] = useState("");
  const [lessonNumber, setLessonNumber] = useState(1);
  const [description, setDescription] = useState("");
  const [tests, setTests] = useState<TestType[]>([]);
  const [hints, setHints] = useState("");
  const [cons, setCons] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    socket.onopen = function (_event) {
      sock(Events.CONNECT);
    };
    socket.onmessage = function (event) {
      const parsedData: { event: keyof typeof handle; data: any } = parse(
        event.data
      );
      handle[parsedData.event]?.(parsedData.data);
    };

    return () => {
      console.log("socket closing");
      socket.close();
    };
  }, []);

  const handle = {
    "toggle-loader-animation": toggleLoaderAnimation,
    "update-test": updateTest,
    "update-tests": updateTests,
    "update-hints": updateHints,
    "update-console": updateConsole,
    "update-description": updateDescription,
    "update-project-heading": updateProjectHeading,
    "reset-tests": resetTests,
  };

  function sock(type: Events, data = {}) {
    socket.send(parse({ event: type, data }));
  }

  function updateProjectHeading({
    projectTopic,
    currentProject,
    lessonNumber,
  }: {
    projectTopic: string;
    currentProject: string;
    lessonNumber: number;
  }) {
    setTopic(projectTopic);
    setProject(currentProject);
    setLessonNumber(lessonNumber);
  }

  function updateDescription({ description }: { description: string }) {
    setDescription(parseMarkdown(description));
  }

  function updateTests({ tests }: { tests: TestType[] }) {
    setTests(tests);
  }
  function updateTest({ test }: { test: TestType }) {
    setTests((ts) => ts.map((t) => (t.testId === test.testId ? test : t)));
  }
  function updateHints({ hints }: { hints: string }) {
    setHints(parseMarkdown(hints));
  }
  function updateConsole({ cons }: { cons: string }) {
    setCons((prev) => prev + "\n\n" + parseMarkdown(cons));
  }

  function resetTests() {
    setTests([]);
  }

  function toggleLoaderAnimation() {
    setIsLoading((prev) => !prev);
  }

  function runTests() {
    setCons("");
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
  return (
    <>
      <Suspense fallback={<Loader />}>
        <IntegratedOrProject
          {...{
            cons,
            description,
            goToNextLesson,
            goToPreviousLesson,
            hints,
            isLoading,
            lessonNumber,
            project,
            resetProject,
            runTests,
            tests,
            topic,
          }}
        />
      </Suspense>
    </>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

function parse(objOrString: any) {
  if (typeof objOrString === "string") {
    return JSON.parse(objOrString);
  } else {
    return JSON.stringify(objOrString);
  }
}
