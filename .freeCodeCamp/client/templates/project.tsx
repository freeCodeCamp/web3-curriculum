import { Description } from '../components/description';
import { Heading } from '../components/heading';
import { ConsoleError, F, ProjectI, TestType } from '../types';
import { Ruler } from '../components/ruler';
import { Controls } from '../components/controls';
import { Output } from '../components/output';
import './project.css';

export interface ProjectProps {
  runTests: F<void, void>;
  resetProject: F<void, void>;
  goToNextLesson: F<void, void>;
  goToPreviousLesson: F<void, void>;
  isLoading: boolean;
  topic: string;
  lessonNumber: number;
  description: string;
  tests: TestType[];
  hints: string;
  cons: ConsoleError[];
  project: ProjectI;
}

export const Project = ({
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
  cons
}: ProjectProps) => {
  return (
    <>
      <Heading
        {...(project.isIntegrated
          ? { topic, title: project.title }
          : {
              goToNextLesson,
              goToPreviousLesson,
              topic,
              title: project.title,
              lessonNumber
            })}
      />

      <Ruler />

      <Description description={description} />

      <Ruler />

      <Controls
        {...(project.isIntegrated ? { runTests } : { runTests, resetProject })}
      />

      <Ruler />

      <Output
        {...(project.isIntegrated
          ? { isLoading, tests, cons }
          : { isLoading, hints, tests, cons })}
      />
    </>
  );
};
