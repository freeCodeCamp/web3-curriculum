import LightBulb from "./light-bulb";

const Ceiling = ({ isLightOn, toggleLight }) => {
  return (
    <div id="ceiling">
      <LightBulb isLightOn={isLightOn} toggleLight={toggleLight} />
    </div>
  );
};

export default Ceiling;
