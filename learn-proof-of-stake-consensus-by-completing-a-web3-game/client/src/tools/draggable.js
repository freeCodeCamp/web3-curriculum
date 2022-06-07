import { useRef, useState, useEffect, useCallback } from "react";

const throttle = (f) => {
  let token = null,
    lastArgs = null;
  const invoke = () => {
    f(...lastArgs);
    token = null;
  };
  const result = (...args) => {
    lastArgs = args;
    if (!token) {
      token = requestAnimationFrame(invoke);
    }
  };
  result.cancel = () => token && cancelAnimationFrame(token);
  return result;
};

const id = (x) => x;
const useDraggable = ({ onDrag = id } = {}) => {
  const [pressed, setPressed] = useState(false);

  const position = useRef({ x: 0, y: 0 });
  const ref = useRef();

  const unsubscribe = useRef();
  const legacyRef = useCallback((elem) => {
    ref.current = elem;
    if (unsubscribe.current) {
      unsubscribe.current();
    }
    if (!elem) {
      return;
    }
    const handleMouseDown = (e) => {
      // don't forget to disable text selection during drag and drop
      // operations
      e.target.style.userSelect = "none";
      setPressed(true);
    };
    elem.addEventListener("mousedown", handleMouseDown);
    unsubscribe.current = () => {
      elem.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  useEffect(() => {
    if (!pressed) {
      return;
    }
    const handleMouseMove = throttle((event) => {
      if (!ref.current || !position.current) {
        return;
      }
      const pos = position.current;

      const elem = ref.current;
      position.current = onDrag({
        x: pos.x + event.movementX,
        y: pos.y + event.movementY,
      });
      elem.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    });
    const handleMouseUp = (e) => {
      e.target.style.userSelect = "auto";
      setPressed(false);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      handleMouseMove.cancel();
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [pressed, onDrag]);

  return [legacyRef, pressed];
};

export default useDraggable;
