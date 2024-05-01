import { useState } from "react";

export default function TodoChangeColor() {
  const [color, setBackgroundColor] = useState("yellow");

  const setColore = () =>
    setBackgroundColor(`#${Math.floor(Math.random() * 1000)}`);

  return (
    <div
      style={{ width: "500px", height: "500px", background: color }}
      onMouseEnter={(e) => setColore(e)}
      onMouseLeave={(e) => setColore(e)}
    >
      asdasdasdasd
    </div>
  );
}
