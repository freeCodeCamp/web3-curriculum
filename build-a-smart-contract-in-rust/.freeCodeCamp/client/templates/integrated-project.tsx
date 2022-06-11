import Description from "../components/description";
import Header from "../components/header";
import Heading from "../components/heading";
import { F, TestType } from "../types";
import "./integrated-project.css";
import Ruler from "../components/ruler";
import IntegratedProjectControls from "../components/integrated-project-controls";
import IntegratedProjectOutput from "../components/integrated-project-output";

interface IntegratedProjectProps {
  runTests: F<void, void>;
  description: string;
  topic: string;
  project: string;
  tests: TestType[];
  cons: string;
  isLoading: boolean;
}

const IntegratedProject = ({
  runTests,
  description,
  topic,
  project,
  tests,
  cons,
  isLoading,
}: IntegratedProjectProps) => {
  return (
    <>
      <Header />
      <Heading topic={topic} project={project} />

      <Ruler />

      <Description description={description} />

      <Ruler />

      <IntegratedProjectControls {...{ runTests }} />

      <Ruler />

      <IntegratedProjectOutput {...{ isLoading, tests, cons }} />
    </>
  );
};

export default IntegratedProject;
