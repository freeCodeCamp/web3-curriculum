import { useState } from "react";
import Loader from "../components/loader";
import { TestType } from "../types";
import ProjectTests from "./project-tests";

interface ProjectOutputProps {
  isLoading: boolean;
  hints: string;
  tests: TestType[];
  cons: string;
}

const ProjectOutput = ({
  isLoading,
  hints,
  tests,
  cons,
}: ProjectOutputProps) => {
  const [content, setContent] = useState<any>("");
  const [selectedBtn, setSelectedBtn] = useState("tests");

  return (
    <section className="project-output">
      <ul>
        <li>
          <button
            className="output-btn"
            disabled={selectedBtn === "tests"}
            onClick={() => {
              setSelectedBtn("tests");
            }}
          >
            Tests
          </button>
        </li>
        <li>
          <button
            className="output-btn"
            disabled={selectedBtn === "console"}
            onClick={() => {
              setContent(cons);
              setSelectedBtn("console");
            }}
          >
            Console
          </button>
        </li>
        <li>
          <button
            className="output-btn"
            disabled={selectedBtn === "hints"}
            onClick={() => {
              setContent(hints);
              setSelectedBtn("hints");
            }}
          >
            Hints
          </button>
        </li>
      </ul>
      {isLoading ? (
        <Loader />
      ) : selectedBtn === "tests" ? (
        <div className="project-output-content">
          <ProjectTests tests={tests} />
        </div>
      ) : (
        <div
          className="project-output-content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}
    </section>
  );
};

export default ProjectOutput;
