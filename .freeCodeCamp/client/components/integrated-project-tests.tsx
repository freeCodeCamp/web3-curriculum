import { TestType } from '../types';
import Test from './test';

interface IntegratedProjectTestsProps {
  tests: TestType[];
}
const IntegratedProjectTests = ({ tests }: IntegratedProjectTestsProps) => {
  return (
    <section id='tests'>
      <ul>
        {tests.map(({ testText, passed, isLoading, testId }, i) => (
          <Test
            key={i}
            {...{
              testText,
              passed,
              isLoading,
              testId
            }}
          />
        ))}
      </ul>
    </section>
  );
};

export default IntegratedProjectTests;
