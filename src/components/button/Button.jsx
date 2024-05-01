import { useState } from "react";

export default function Button() {
  const [background, setBackgroundColor] = useState("111");
  const [color, setColor] = useState("#FFF");
  return (
    <button
      style={{
        background,
        position: "absolute",
        left: "50%",
        fontSize: "50px",
        color,
      }}
      onClick={() => {
        setBackgroundColor(`#${Math.floor(Math.random() * 1000)}`);
        setColor(`#${Math.floor(Math.random() * 1000)}`);
      }}
    >
      Change color
    </button>
  );
}
