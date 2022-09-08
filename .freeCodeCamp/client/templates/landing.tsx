import { Selection } from '../components/selection';
import { Events, FreeCodeCampConfigI, ProjectI } from '../types';
import './landing.css';

interface LandingProps {
  topic: string;
  sock: (type: Events, data: {}) => void;
  projects: ProjectI[];
  freeCodeCampConfig: FreeCodeCampConfigI;
}

export const Landing = ({
  topic,
  sock,
  projects,
  freeCodeCampConfig
}: LandingProps) => {
  return (
    <>
      <h2>{topic}</h2>
      <p className='description'>
        {freeCodeCampConfig.client?.landing?.description}
      </p>
      <a
        className='faq'
        href={freeCodeCampConfig.client?.landing?.['faq-link']}
      >
        {freeCodeCampConfig.client?.landing?.['faq-text']}
      </a>
      <Selection {...{ topic, sock, projects }} />
    </>
  );
};
