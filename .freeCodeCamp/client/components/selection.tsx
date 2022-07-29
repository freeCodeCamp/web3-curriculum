import { Events } from '../types';
import projects from '../../config/projects.json' assert { type: 'json' };
import { Block } from './block';

export interface SelectionProps {
  topic: string;
  sock: (type: Events, data: {}) => void;
}
export const Selection = ({ topic, sock }: SelectionProps) => {
  return (
    <>
      <h2>{topic}</h2>
      <p className='description'>Yes, more Web3 hype! Woot!</p>
      <a className='faq' href='#'>
        Link to FAQ related to course
      </a>
      <ul className='blocks'>
        {projects.map((p, i) => {
          return <Block key={i} {...{ ...p, sock }} />;
        })}
      </ul>
    </>
  );
};
