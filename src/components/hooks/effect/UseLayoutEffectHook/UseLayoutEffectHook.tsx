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
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: "lightblue",
        margin: "auto",
      }}
    >
      <h3>UseLayoutEffect</h3>
      <p>This box changes color before you see it!</p>
    </div>
  );
};

export default UseLayoutEffectExample;
