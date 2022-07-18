import { F } from '../types';

interface ProjectControlsProps {
  runTests: F<void, void>;
  resetProject: F<void, void>;
}

const ProjectControls = ({ runTests, resetProject }: ProjectControlsProps) => {
  return (
    <section className='project-controls'>
      <button onClick={() => runTests()}>Run Tests</button>
      <button onClick={() => resetProject()}>Reset Step</button>
    </section>
  );
};

export default ProjectControls;
