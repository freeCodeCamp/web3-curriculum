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
    <li className='block' style={!isPublic ? { height: '70px' } : {}}>
      <button
        className='block-btn'
        onClick={selectProject}
        disabled={!isPublic}
        style={
          !isPublic
            ? {
                backgroundColor: 'grey',
                cursor: 'not-allowed'
              }
            : {}
        }
      >
        <h3 style={!isPublic ? { margin: '0px' } : {}}>{title}</h3>
        <p style={!isPublic ? { margin: '0px' } : {}}>
          {isPublic ? (
            <>
              {description}
              <Tag text='Available Now' />
            </>
          ) : (
            <Tag text='Coming Soon' margin='0px' />
          )}
        </p>
        {isIntegrated && <Badge />}
      </button>
    </li>
  );
};
