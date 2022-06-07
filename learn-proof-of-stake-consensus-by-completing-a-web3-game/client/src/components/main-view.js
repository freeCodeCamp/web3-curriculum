import { useContext, useEffect, useState } from "react";
import Server from "./server";
import Chain from "./chain";
import Ceiling from "./ceiling";
import Ground from "./ground";
import Monitor from "./monitor";
import Camperbot from "./camperbot";
import { scramble } from "../tools/utils";
import { getSelf, NameContext } from "../node-state";
import { sampleTask } from "../tutorial/state";
import bubbleJson from "../../public/bubbles.json";
import {
  SocketContext,
  tasks as tasksEvent,
  chain as chainEvent,
} from "../tools/socket";

/**
 * The number of tokens added to a single server rack, before overflowing to the next.
 */
const MAX_TOKENS_PER_SERVER = 20;

const MainView = ({ setIsTutorialing }) => {
  const socket = useContext(SocketContext);
  const name = useContext(NameContext);
  const [tasks, setTasks] = useState([]);
  const [chain, setChain] = useState([]);
  const [transactionPool, setTransactionPool] = useState([]);
  const [nodeAccount, setNodeAccount] = useState(null);
  const [serverData, setServerData] = useState([]);
  const [isLightOn, setIsLightOn] = useState(true);
  const [text, setText] = useState("");
  const [lesson, setLesson] = useState(0);
  const [tutorialLessonTest, setTutorialLessonTest] = useState(
    () => () => false
  );

  const handleNextBubble = () => {
    if (lesson < bubbleJson.length - 1) {
      setText(bubbleJson[lesson + 1]?.text ?? "");
      setLesson(lesson + 1);
    }
  };

  const handlePreviousBubble = () => {
    if (lesson > 0) {
      setText(bubbleJson[lesson - 1]?.text ?? "");
      setLesson(lesson - 1);
    }
  };

  useEffect(() => {
    if (socket) {
      socket.addEventListener("tasks", ({ detail: { tasks } }) => {
        setTasks(tasks);
      });
      socket.addEventListener("chain", ({ detail: { chain } }) => {
        const self = getSelf(name, chain);
        setChain(chain);
        setNodeAccount(() => self);
      });
      socket.addEventListener(
        "transactionPool",
        ({ detail: { transactionPool } }) => {
          setTransactionPool(transactionPool);
        }
      );
    }
  }, [socket, name]);

  useEffect(() => {
    setText(bubbleJson[lesson]?.text ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bubbleJson]);

  function toggleLight() {
    document.querySelector(".room").classList.toggle("dark");
    setIsLightOn(!isLightOn);
  }

  useEffect(() => {
    if (nodeAccount) {
      const { tokens, staked, racks } = nodeAccount;
      let tokensRemaining = tokens;
      let stakedRemaining = staked;
      let tasksRemaining = tasks.length;
      // Create `racks` servers
      const servers = [];
      for (let i = 0; i < racks; i++) {
        const numTokensInServer =
          tokensRemaining >= MAX_TOKENS_PER_SERVER
            ? MAX_TOKENS_PER_SERVER
            : tokensRemaining;
        const numStakedInServer =
          stakedRemaining >= MAX_TOKENS_PER_SERVER
            ? MAX_TOKENS_PER_SERVER
            : stakedRemaining;
        const numTasksInServer =
          tasksRemaining >= MAX_TOKENS_PER_SERVER
            ? MAX_TOKENS_PER_SERVER
            : tasksRemaining;
        const server = {
          tasks: numTasksInServer,
          tokens: numTokensInServer,
          staked: numStakedInServer,
        };
        servers.push(server);
        tokensRemaining -= numTokensInServer;
        stakedRemaining -= numStakedInServer;
        tasksRemaining -= numTasksInServer;
      }

      setServerData(servers);
    }
  }, [nodeAccount, tasks]);

  useEffect(() => {
    // Test if lesson has been passed:
    const testResult = tutorialLessonTest();
    if (testResult) {
      setTutorialLessonTest(() => () => false);
      handleNextBubble();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverData, nodeAccount, tasks, transactionPool]);

  useEffect(() => {
    switch (lesson) {
      case 5:
        setTutorialLessonTest(() => () => {
          // Test if enough tokens have been staked
          return nodeAccount.staked >= 91;
        });
        break;
      case 6:
        // Set task
        socket.dispatchEvent(tasksEvent({ tasks: [sampleTask] }));
        break;
      case 10:
        setTutorialLessonTest(() => () => {
          // Test screen is clicked on
          return document.querySelector(".actual-screen");
        });
        break;
      case 11:
        setTutorialLessonTest(() => () => {
          // Test task is submitted
          const taskLength = tasks.length;
          return taskLength;
        });
        break;
      case 14:
        // Task has been validated
        const tutorialChain = [
          {
            ...chain[0],
            data: [
              {
                ...chain[0].data[0],
                tokens: chain[0].data[0].tokens + 1,
                reputation: chain[0].data[0].reputation + 1,
              },
            ],
          },
        ];
        socket.dispatchEvent(chainEvent({ chain: tutorialChain }));
        break;
      case 17:
        setTutorialLessonTest(() => () => {
          // Test rack is bought
          return nodeAccount.racks >= 9;
        });
        break;
      case 20:
        // Hacked
        hacked();
        // Default starting state
        setIsTutorialing(false);
        break;
      default:
        break;
    }
    function hacked() {
      let i = 0;
      const interval = setInterval(() => {
        if (i >= 10) {
          if (!isLightOn) {
            toggleLight();
          }
          return clearInterval(interval);
        }
        toggleLight();
        i++;
      }, 200);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson]);

  return (
    <main className={lesson === 20 ? "show-take-over" : ""}>
      <Chain transactionPool={transactionPool} />
      <Camperbot
        text={text}
        setText={setText}
        isLightOn={isLightOn}
        handleNextBubble={handleNextBubble}
        handlePreviousBubble={handlePreviousBubble}
      />
      <Ceiling isLightOn={isLightOn} toggleLight={toggleLight} />
      <section className="room">
        <div className="station">
          <Monitor task={scramble(tasks)?.[0]} isLightOn={isLightOn} />
          <div className="server-stack">
            {serverData.map((server, i) => (
              <Server serverData={server} key={i} isLightOn={isLightOn} />
            ))}
          </div>
        </div>
      </section>
      <Ground />
    </main>
  );
};

export default MainView;
