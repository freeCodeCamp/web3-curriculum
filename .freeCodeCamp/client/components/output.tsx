import { useState } from 'react';
import { Loader } from './loader';
import { ConsoleError, TestType } from '../types';
import { Tests } from './tests';
import { Console } from './console';
import { Hints } from './hints';

interface OutputProps {
  isLoading: boolean;
  hints?: string;
  tests: TestType[];
  cons: ConsoleError[];
}

export const Output = ({ isLoading, hints, tests, cons }: OutputProps) => {
  const [selectedBtn, setSelectedBtn] = useState('tests');

  return (
    <section className='project-output'>
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
              setSelectedBtn('console');
            }}
          >
            Console
          </button>
        </li>
        {hints && (
          <li>
            <button
              className='output-btn'
              disabled={selectedBtn === 'hints'}
              onClick={() => {
                setSelectedBtn('hints');
              }}
            >
              Hints
            </button>
          </li>
        )}
      </ul>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='project-output-content'>
          {(() => {
            switch (selectedBtn) {
              case 'tests':
                return <Tests tests={tests} />;
              case 'console':
                return <Console cons={cons} />;
              case 'hints':
                return <Hints hints={hints!} />;
              default:
                return <div>No content</div>;
            }
          })()}
        </div>
      )}
    </section>
  );
};
