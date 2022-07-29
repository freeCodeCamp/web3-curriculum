import { F } from '../types';

interface ControlsProps {
  runTests: F<void, void>;
  resetProject?: F<void, void>;
}

export const Controls = ({ runTests, resetProject }: ControlsProps) => {
  return (
    <section className='project-controls'>
      <button onClick={() => runTests()}>Run Tests</button>
      {resetProject && (
        <button onClick={() => resetProject()}>Reset Step</button>
      )}
    </section>
  );
};
