import { SelectionProps } from './selection';
import { ProjectI, Events } from '../types/index';
import { Tag } from './tag';
import { Badge } from './badge';

type BlockProps = {
  sock: SelectionProps['sock'];
} & ProjectI;

export const Block = ({
  id,
  title,
  description,
  isIntegrated,
  isPublic,
  numberOfLessons,
  currentLesson,
  sock
}: BlockProps) => {
  function selectProject() {
    sock(Events.SELECT_PROJECT, { id });
  }

  const lessonsCompleted = currentLesson - 1;
  return (
    <li className='block'>
      <button
        className='block-btn'
        onClick={selectProject}
        disabled={!isPublic}
        style={
          !isPublic
            ? {
                cursor: 'not-allowed'
              }
            : {}
        }
      >
        <div className={'tags-row'}>
          {isPublic && isIntegrated && <Tag text='Integrated Project' />}

          {!isPublic && <Tag text='Coming Soon' />}
        </div>

        <h2>{title}</h2>
        <div className='block-info'>
          <p>{description}</p>
          <span aria-hidden='true'>
            {lessonsCompleted}/{numberOfLessons}
          </span>
          <span className='sr-only'>
            {lessonsCompleted} of {numberOfLessons} lessons completed
          </span>
        </div>
      </button>
    </li>
  );
};
