import "./light-bulb.css";

const LightBulb = ({ isLightOn, toggleLight }) => {
  return (
    <div
      className="light-bulb"
      onClick={(e) => {
        e.stopPropagation();
        toggleLight();
      }}
    >
      <div className="wire"></div>
      <div className="shade"></div>
      {isLightOn && (
        <>
          <div className="bulb"></div>
          <div className="light"></div>
        </>
      )}
    </div>
  );
};

export default LightBulb;
