import { useEffect, useState } from 'react';
import { TestType } from '../types';
import { Congratulations } from './congratulations';
import { Test } from './test';

interface TestsProps {
  tests: TestType[];
}

export const Tests = ({ tests }: TestsProps) => {
  const [won, setWon] = useState(false);

  useEffect(() => {
    const passed = tests.length > 0 && tests.every(test => test.passed);
    setWon(passed);
  }, [tests]);

  return (
    <ul style={{ listStyle: 'none' }}>
      {won ? (
        <Congratulations />
      ) : (
        tests.map(({ testText, passed, isLoading, testId }, i) => (
          <Test
            key={i}
            {...{
              testText,
              passed,
              isLoading,
              testId
            }}
          />
        ))
      )}
    </ul>
  );
};
