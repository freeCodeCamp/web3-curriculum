import { useEffect, useRef, useState } from 'react';
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
  const [anim, setAnim] = useState('');

  useEffect(() => {
    setAnim('fade-in');
    setTimeout(() => setAnim(''), 1000);
  }, [lessonNumber]);

  return (
    <nav className='heading'>
      {goToPreviousLesson && (
        <button
          className='previous-lesson-btn'
          onClick={() => goToPreviousLesson()}
        >
          {'<'}
        </button>
      )}
      <h1 id='project-heading' className={anim}>
        {topic} - {title}
        {lessonNumber && ' - Lesson ' + lessonNumber}
      </h1>
      {goToNextLesson && (
        <button className='next-lesson-btn' onClick={() => goToNextLesson()}>
          {'>'}
        </button>
      )}
    </nav>
  );
};
