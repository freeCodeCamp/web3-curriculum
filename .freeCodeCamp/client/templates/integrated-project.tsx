import Description from "../components/description";
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
  title: string;
  tests: TestType[];
  cons: string;
  isLoading: boolean;
}

const IntegratedProject = ({
  runTests,
  description,
  topic,
  title,
  tests,
  cons,
  isLoading,
}: IntegratedProjectProps) => {
  return (
    <>
      <Heading topic={topic} title={title} />

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
