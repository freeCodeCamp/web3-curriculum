import { Project } from "../types";

interface HeaderProps {
  setProject: (project: Project | null) => void;
}
const Header = ({ setProject }: HeaderProps) => {
  function returnToLanding() {
    setProject(null);
  }
  return (
    <header>
      <button className="header-btn" onClick={returnToLanding}>
        <img
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/main/build/platform/universal/fcc_primary.svg"
          id="logo"
          alt="freeCodeCamp logo"
        />
      </button>
    </header>
  );
};

export default Header;
