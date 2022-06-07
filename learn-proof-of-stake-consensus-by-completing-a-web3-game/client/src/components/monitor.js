import "./monitor.css";

import Screen from "./screen";

const Monitor = ({ task, isLightOn }) => {
  return (
    <div className="monitor">
      <Screen task={task} isLightOn={isLightOn} />
      <div className="arm"></div>
      <div className="stand"></div>
    </div>
  );
};

export default Monitor;
