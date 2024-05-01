import { useState } from "react";

export default function ParentComponent() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div>
      <TodoChangeColor id={1} activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
      <TodoChangeColor id={2} activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
      {/* Add more components as needed */}
    </div>
  );
}

function TodoChangeColor({ id, activeComponent, setActiveComponent }) {
  const [color, setBackgroundColor] = useState("yellow");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const setColore = () =>
    setBackgroundColor(`#${Math.floor(Math.random() * 1000)}`);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div
      id={id}
      style={{ width: "500px", height: "500px", background: color, position: 'relative' }}
      onMouseEnter={() => {
        setColore();
        setActiveComponent(id);
      }}
      onMouseLeave={setColore}
      onMouseMove={handleMouseMove}
    >
      <div style={{ position: 'absolute', left: mousePosition.x, top: mousePosition.y }}>
        {`x: ${mousePosition.x}, y: ${mousePosition.y}`}
      </div>
    </div>
  );
}
