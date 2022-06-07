import { useContext, useEffect, useState } from "react";
import ScreenNav from "./screen-nav";
import { scramble } from "../tools/utils";
import { marked } from "marked";
import Prism from "prismjs";
import glow from "../tools/glow";
import { dispatchSubmitTask } from "../node-state";
import { SocketContext, tasks } from "../tools/socket";

const Screen = ({ task = {}, isLightOn }) => {
  const socket = useContext(SocketContext);
  const [isTask, setIsTask] = useState(Object.keys(task).length > 0);
  const [isShowActualScreen, setIsShowActualScreen] = useState(false);

  useEffect(() => {
    setIsTask(Object.keys(task).length > 0);
  }, [task]);

  async function startTask() {
    // Stop flashing
    setIsTask(false);

    await animateIntoScreen();
    popActualScreen();
  }

  async function animateIntoScreen() {
    const width = window.innerWidth / 130;
    const bodyStyle = document.querySelector("body").style;

    const screenBounds = document
      .querySelector(".screen")
      .getBoundingClientRect();
    const screenCenter = screenBounds.y + screenBounds.height / 2;
    bodyStyle.transition = "transform 2s";
    bodyStyle.transformOrigin = `50% ${screenCenter}px`;
    bodyStyle.transform = `scale(${width})`;

    await new Promise((resolve) => setTimeout(resolve, 1800));
  }

  async function handleSub(orderNumberSelected) {
    dispatchSubmitTask(socket, { task, orderNumberSelected });

    // Change view back to main screen
    const width = window.innerWidth / 130;
    const bodyStyle = document.querySelector("body").style;
    const screenBounds = document
      .querySelector(".screen")
      .getBoundingClientRect();
    const screenCenter = screenBounds.y + screenBounds.height / 2;
    bodyStyle.transformOrigin = `50% ${screenCenter}px`;
    bodyStyle.transform = `scale(${width})`;
    await new Promise((resolve) => setTimeout(resolve, 1000));

    bodyStyle.transition = "transform 2s";

    bodyStyle.transform = "scale(1)";
    setIsShowActualScreen(false);
  }

  function popActualScreen() {
    const bodyStyle = document.querySelector("body").style;
    bodyStyle.transition = "unset";
    bodyStyle.transform = "scale(1)";
    setIsShowActualScreen(true);
    socket.dispatchEvent(tasks({ tasks: [task] }));
  }

  return (
    <>
      <div
        onClick={() => isTask && startTask()}
        style={glow(".screen", isLightOn)}
        className={"screen" + (isTask ? " flash" : "")}
        disabled={!isTask}
      >
        {!isTask && <div role="tooltip">No tasks to complete</div>}
      </div>
      {isShowActualScreen && (
        <div className="actual-screen">
          <ScreenNav />
          <Quizzer
            handleSub={handleSub}
            question={task.question}
            options={scramble(task.options)}
          />
        </div>
      )}
    </>
  );
};

marked.setOptions({
  highlight: (code, lang) => {
    if (Prism.languages[lang]) {
      return Prism.highlight(code, Prism.languages[lang], lang);
    } else {
      return code;
    }
  },
});

const Quizzer = ({ handleSub, question, options }) => {
  const [selected, setSelected] = useState(null);

  function parseMarkdown(markdown = "") {
    return marked.parse(markdown, { gfm: true });
  }

  return (
    <>
      <section className="description">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: parseMarkdown(question) }}
        ></div>
      </section>
      <ul className="options">
        {options.map((option) => {
          return (
            <li
              className={
                "options-item" + (selected === option.order ? " selected" : "")
              }
              key={option.order}
            >
              <label>
                <input
                  type="radio"
                  name="language"
                  value={option.order}
                  onChange={() => setSelected(option.order)}
                />
                <div
                  className="code"
                  dangerouslySetInnerHTML={{
                    __html: parseMarkdown(option.code),
                  }}
                ></div>
              </label>
            </li>
          );
        })}
      </ul>
      <div className="submit">
        <button
          onClick={(e) => {
            if (e.defaultPrevented) return;
            e.preventDefault();
            e.stopPropagation();
            handleSub(selected);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Screen;
