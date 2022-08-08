import { Events } from '../types';
import projects from '../../config/projects.json' assert { type: 'json' };
import { Block } from './block';

export interface SelectionProps {
  sock: (type: Events, data: {}) => void;
}
export const Selection = ({ sock }: SelectionProps) => {
  return (
    <ul className='blocks'>
      {projects.map((p, i) => {
        return <Block key={i} {...{ ...p, sock }} />;
      })}
    </ul>
  );
};
