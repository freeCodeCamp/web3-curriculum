import { Description } from '../components/description';
import { Heading } from '../components/heading';
import { ConsoleError, F, ProjectI, TestType } from '../types';
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
      <div className='container'>
        <Heading
          {...(project.isIntegrated
            ? { topic, title: project.title }
            : {
                goToNextLesson,
                goToPreviousLesson,
                numberOfLessons: project.numberOfLessons,
                topic,
                title: project.title,
                lessonNumber
              })}
        />

        <Description description={description} />

        <Controls
          {...(project.isIntegrated
            ? { runTests }
            : {
                runTests,
                resetProject,
                isResetEnabled: project.isResetEnabled
              })}
        />

        <Output
          {...(project.isIntegrated
            ? { isLoading, tests, cons }
            : { isLoading, hints, tests, cons })}
        />
      </div>
    </>
  );
};
