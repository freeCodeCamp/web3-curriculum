export default function glow(element, isLightOn) {
  if (isLightOn) return {};
  const el = document.querySelector(element);
  const blurSize = el?.clientWidth / 10;
  const spreadSize = el?.clientWidth / 10;
  const colour = el?.style?.backgroundColor;
  return { boxShadow: `0px 0px ${blurSize}px ${spreadSize}px ${colour}` };
}
