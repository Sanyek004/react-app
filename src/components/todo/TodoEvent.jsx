import { useState } from "react";

export default function TodoEvent() {
  const [mousePosition, setMousePosition] = useState({
    positionX: 0,
    positionY: 0,
  });

  const MouseMove = (e) => {
    setMousePosition({
      positionX: e.clientX - e.target.offsetLeft,
      positionY: e.clientY - e.target.offsetTop,
    });
  };

  return (
    <div
      style={{ width: "500px", height: "500px", background: "red" }}
      onMouseMove={(e) => MouseMove(e)}
    >
      <h1>{mousePosition.positionX} X</h1>
      <h1>{mousePosition.positionY} Y</h1>
    </div>
  );
}
