import { F, ProjectI } from '../types';

interface ControlsProps {
  runTests: F<void, void>;
  resetProject?: F<void, void>;
  isResetEnabled?: ProjectI['isResetEnabled'];
}

export const Controls = ({
  runTests,
  resetProject,
  isResetEnabled
}: ControlsProps) => {
  return (
    <section className='project-controls'>
      <button className='secondary-cta' onClick={() => runTests()}>
        Run Tests
      </button>
      {resetProject && (
        <button
          disabled={!isResetEnabled}
          style={isResetEnabled ? {} : { cursor: 'not-allowed' }}
          onClick={() => resetProject()}
        >
          Reset Step
        </button>
      )}
    </section>
  );
};
