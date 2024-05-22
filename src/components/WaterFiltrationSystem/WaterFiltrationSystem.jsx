import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
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

  
  const openPopup = (content) => {
    setPopupContent(content);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setPopupContent('');
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
    <br /> <br></br>
      <img src="https://spaceaqua.ru/upload/medialibrary/6eb/sgc7obfse0ku87jp256gak6lmb2an6is.png" alt="Water Filtration System" />      
      <div
        className={`plus-icon plus-icon-1 ${showInfo === 1 ? 'active' : ''}`}
        onClick={() => handleIconClick(1)}
      >
        <Avatar size={32} icon={<PlusOutlined />} />
        <CSSTransition
          in={showInfo === 1}
          timeout={2000}
          classNames="info-popup"
          unmountOnExit
        >
          <div className="info-popup" onMouseDown={closeInfoPopup}>
            <h3>Система аэрации</h3>
            <p>Насыщает воду кислородом, переводя растворённое железо в осадок и удаляет запах сероводорода</p>
          </div>
        </CSSTransition>
      </div>
      
      <div
        className={`plus-icon plus-icon-2 ${showInfo === 2 ? 'active' : ''}`}
        onClick={() => handleIconClick(2)}
      >
        <Avatar size={32} icon={<PlusOutlined />} />
        <CSSTransition
          in={showInfo === 2}
          timeout={2000}
          classNames="info-popup"
          unmountOnExit
        >
          <div className="info-popup" onMouseDown={closeInfoPopup}>
            <h3>Система обезжелезивания</h3>
            <p>Очищает от железа</p>
          </div>
        </CSSTransition>
      </div>
      
      <div
        className={`plus-icon plus-icon-3 ${showInfo === 3 ? 'active' : ''}`}
        onClick={() => handleIconClick(3)}
      >
        <Avatar size={32} icon={<PlusOutlined />} />
        <CSSTransition
          in={showInfo === 3}
          timeout={2000}
          classNames="info-popup"
          unmountOnExit
        >
          <div className="info-popup" onMouseDown={closeInfoPopup}>
            <h3>Система ProMix</h3>
            <p>Очищает от марганца, органических веществ, аммония, жёсткости и железа</p>
          </div>
        </CSSTransition>
      </div>
    </div>
  </div>
);
};

export default WaterFiltrationSystem;