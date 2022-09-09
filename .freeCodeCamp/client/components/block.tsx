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
  sock
}: BlockProps) => {
  function selectProject() {
    sock(Events.SELECT_PROJECT, { id });
  }
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
        <p>{description}</p>
      </button>
    </li>
  );
};
