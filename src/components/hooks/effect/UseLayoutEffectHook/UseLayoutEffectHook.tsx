import React, { useLayoutEffect, useRef } from "react";

const UseLayoutEffectExample: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      // This runs before the browser paints the screen
      divRef.current.style.backgroundColor = "lightgreen";
    }
  }, []);

  return (
    <div
      ref={divRef}
      style={{ width: "200px", height: "100px", backgroundColor: "lightblue" }}
    >
      This box changes color before you see it!
    </div>
  );
};

export default UseLayoutEffectExample;
