import { F } from "../types";

interface IntegratedProjectControlsProps {
  runTests: F<void, void>;
}

const IntegratedProjectControls = ({
  runTests,
}: IntegratedProjectControlsProps) => {
  return (
    <section className="integrated-project-controls">
      <button onClick={() => runTests()}>Run Tests</button>
    </section>
  );
};

export default IntegratedProjectControls;
