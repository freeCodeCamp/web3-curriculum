import { ProjectI } from '../types';
import FreeCodeCampLogo from '../assets/fcc_primary_large';

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
        <FreeCodeCampLogo />
      </button>
    </header>
  );
};
