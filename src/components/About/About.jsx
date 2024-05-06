import React from 'react';
import './about.css';

const IconDescription = ({ iconUrl, description }) => (
  <div className="icon-description">
    <img src={iconUrl} alt="Icon" />
    <p>{description}</p>
  </div>
);

const App = () => {
  const iconDescriptions = [
    { iconUrl: 'https://spaceaqua.ru/upload/iblock/78f/yioblydqe5sfy2fdp8ve5jncss3tgy1q.svg', description: 'Мы являемся официальными поставщиками управляющих клапанов Cappers (Франция) в России и несём полную ответственность по гарантии' },
    { iconUrl: 'https://spaceaqua.ru/upload/iblock/e1f/g0jr5eaktcrc1ktlcueduapyr3n3yfg3.svg', description: 'На производстве оборудование тестируется и настраивается. Гарантия распространяется на систему полностью, а не только на отдельные комплектующие' },
    { iconUrl: 'https://spaceaqua.ru/upload/iblock/f88/dy9pl7pymn851iflp2aqky23dzncxiyq.svg', description: 'В нашем инженерно-исследовательском центре разрабатываются наиболее современные решения в области водоподготовки' },
    { iconUrl: 'https://spaceaqua.ru/upload/iblock/f1d/69bmrsyejasozk4w6w6xnzq9z7c9biri.svg', description: 'Мы входим в мировую некоммерческую ассоциацию компаний по очистке воды Water Quality Association (WQA) основанную в 1974 году' },
  ];

  return (
    <div className="about-container">
      <div className="left-section">
        <h1>О компании</h1>
        <p>SpaceAqua — это прогрессивный бренд для людей, которые заботятся о своём здоровье и комфорте. Мы работаем, чтобы обеспечить наших клиентов безопасной, чистой и вкусной водой.</p>
      </div>
      <div className="right-section">
        {iconDescriptions.map((iconDescription, index) => (
          <IconDescription key={index} {...iconDescription} />
        ))}
      </div>
    </div>
  );
};

export default App;