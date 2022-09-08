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
    <nav className='heading'>
      {goToPreviousLesson && (
        <button
          className='previous-lesson-btn'
          onClick={() => goToPreviousLesson()}
        >
          &larr;
        </button>
      )}
      <h1 id='project-heading'>
        {topic} - {title}
        {lessonNumber && <LessonNumber lessonNumber={lessonNumber} />}
      </h1>
      {goToNextLesson && (
        <button className='next-lesson-btn' onClick={() => goToNextLesson()}>
          &rarr;
        </button>
      )}
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
