import { useState } from 'react';
import Loader from './loader';
import { TestType } from '../types';
import ProjectTests from './project-tests';

interface IntegratedProjectOutputProps {
  isLoading: boolean;
  tests: TestType[];
  cons: string;
}

const IntegratedProjectOutput = ({
  isLoading,
  tests,
  cons
}: IntegratedProjectOutputProps) => {
  const [content, setContent] = useState('');
  const [selectedBtn, setSelectedBtn] = useState('tests');

  return (
    <section className='integrated-project-output'>
      <ul>
        <li>
          <button
            className='output-btn'
            disabled={selectedBtn === 'tests'}
            onClick={() => {
              setSelectedBtn('tests');
            }}
          >
            Tests
          </button>
        </li>
        <li>
          <button
            className='output-btn'
            disabled={selectedBtn === 'console'}
            onClick={() => {
              setContent(cons);
              setSelectedBtn('console');
            }}
          >
            Console
          </button>
        </li>
      </ul>
      {isLoading ? (
        <Loader />
      ) : selectedBtn === 'tests' ? (
        <div className='integrated-project-output-content'>
          <ProjectTests tests={tests} />
        </div>
      ) : (
        <div
          className='integrated-project-output-content'
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}
    </section>
  );
};

export default IntegratedProjectOutput;
