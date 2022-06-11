import { TestType } from "../types";
import Test from "./test";

interface ProjectTestsProps {
  tests: TestType[];
}

const ProjectTests = ({ tests }: ProjectTestsProps) => {
  return (
    <ul>
      {tests.map(({ testText, passed, isLoading, testId }, i) => (
        <Test
          key={i}
          {...{
            testText,
            passed,
            isLoading,
            testId,
          }}
        />
      ))}
    </ul>
  );
};

export default ProjectTests;
