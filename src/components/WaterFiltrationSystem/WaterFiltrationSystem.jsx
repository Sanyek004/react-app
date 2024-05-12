import React, { useState } from 'react';
import { Avatar } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './WaterFiltrationSystem.css';

const WaterFiltrationSystem = () => {
  const [showInfo, setShowInfo] = useState(null);

  const handleIconClick = (index) => {
    setShowInfo(showInfo === index ? null : index);
  };

  const closeInfoPopup = (e) => {
    if (e.target.classList.contains('info-popup') || e.target.closest('.info-popup')) {
      return;
    }
    setShowInfo(null);
  };

  return (
    <div className="water-filtration-system">
      <div className="text-container">
        <h1>Бесплатный подбор системы водоочистки</h1>
        <p>
          Мы готовы предложить комплектующие и готовые решения систем водоочистки для загородного дома, квартиры и производства.
        </p>
        <button type="button">Подобрать оборудование</button>
      </div>
      <div className="image-container">
        <img src="https://spaceaqua.ru/upload/medialibrary/6eb/sgc7obfse0ku87jp256gak6lmb2an6is.png" alt="Water Filtration System" />
        <div
          className={`plus-icon plus-icon-1 ${showInfo === 1 ? 'active' : ''}`}
          onClick={() => handleIconClick(1)}
        >
          <Avatar size={32} icon={<PlusOutlined />} />
          {showInfo === 1 && (
            <div className={`info-popup ${showInfo === 1 ? 'show' : ''}`} onMouseDown={closeInfoPopup}>
              <h3>Заголовок 1</h3>
              <p>Текст для иконки 1</p>
            </div>
          )}
        </div>
        <div
          className={`plus-icon plus-icon-2 ${showInfo === 2 ? 'active' : ''}`}
          onClick={() => handleIconClick(2)}
        >
          <Avatar size={32} icon={<PlusOutlined />} />
          {showInfo === 2 && (
            <div className={`info-popup ${showInfo === 2 ? 'show' : ''}`} onMouseDown={closeInfoPopup}>
              <h3>Заголовок 2</h3>
              <p>Текст для иконки 2</p>
            </div>
          )}
        </div>
        <div
          className={`plus-icon plus-icon-3 ${showInfo === 3 ? 'active' : ''}`}
          onClick={() => handleIconClick(3)}
        >
          <Avatar size={32} icon={<PlusOutlined />} />
          {showInfo === 3 && (
            <div className={`info-popup ${showInfo === 3 ? 'show' : ''}`} onMouseDown={closeInfoPopup}>
              <h3>Заголовок 3</h3>
              <p>Текст для иконки 3</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaterFiltrationSystem;