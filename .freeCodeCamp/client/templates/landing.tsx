import { Selection } from '../components/selection';
import { Events } from '../types';
import './landing.css';

interface LandingProps {
  topic: string;
  sock: (type: Events, data: {}) => void;
}

export const Landing = ({ topic, sock }: LandingProps) => {
  return (
    <>
      <Selection {...{ topic, sock }} />
    </>
  );
};
