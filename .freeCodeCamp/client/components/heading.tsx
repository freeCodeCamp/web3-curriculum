import { F } from '../types';

interface HeadingProps {
  topic: string;
  title: string;
  lessonNumber?: number;
  goToNextLesson?: F<void, void>;
  goToPreviousLesson?: F<void, void>;
}

export const Heading = ({
  topic,
  title,
  lessonNumber,
  goToNextLesson,
  goToPreviousLesson
}: HeadingProps) => {
  return (
    <nav>
      {goToPreviousLesson && (
        <button onClick={() => goToPreviousLesson()}>&lt;</button>
      )}
      <h1 id='project-heading'>
        {topic} - {title}
        {lessonNumber && <LessonNumber lessonNumber={lessonNumber} />}
      </h1>
      {goToNextLesson && <button onClick={() => goToNextLesson()}>&gt;</button>}
    </nav>
  );
};

const LessonNumber = ({ lessonNumber }: { lessonNumber: number }) => {
  return (
    <>
      {' '}
      - Lesson{' '}
      <span id='lesson-number' className='sparkle'>
        {lessonNumber}
      </span>
    </>
  );
};
