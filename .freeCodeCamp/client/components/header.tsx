import { ProjectI } from '../types';

interface HeaderProps {
  updateProject: (project: ProjectI | null) => void;
}
export const Header = ({ updateProject }: HeaderProps) => {
  function returnToLanding() {
    updateProject(null);
  }
  return (
    <header>
      <button className='header-btn' onClick={returnToLanding}>
        <img
          src='https://raw.githubusercontent.com/freeCodeCamp/cdn/main/build/platform/universal/fcc_primary.svg'
          id='logo'
          alt='freeCodeCamp logo'
        />
      </button>
    </header>
  );
};
