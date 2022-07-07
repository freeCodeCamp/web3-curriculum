import Description from "../components/description";
import Header from "../components/header";
import Heading from "../components/heading";
import "./project.css";
import { F, TestType } from "../types";
import Ruler from "../components/ruler";
import ProjectControls from "../components/project-controls";
import ProjectOutput from "../components/project-output";

interface ProjectProps {
  runTests: F<void, void>;
  resetProject: F<void, void>;
  goToNextLesson: F<void, void>;
  goToPreviousLesson: F<void, void>;
  isLoading: boolean;
  project: string;
  topic: string;
  lessonNumber: number;
  description: string;
  tests: TestType[];
  hints: string;
  cons: string;
}

const Project = ({
  runTests,
  resetProject,
  goToNextLesson,
  goToPreviousLesson,
  isLoading,
  project,
  topic,
  lessonNumber,
  description,
  tests,
  hints,
  cons,
}: ProjectProps) => {
  return (
    <>
      <Heading
        {...{
          goToNextLesson,
          goToPreviousLesson,
          topic,
          project,
          lessonNumber,
        }}
      />

      <Ruler />

      <Description description={description} />

      <Ruler />

      <ProjectControls {...{ runTests, resetProject }} />

      <Ruler />

      <ProjectOutput {...{ isLoading, hints, tests, cons }} />
    </>
  );
};

export default Project;
