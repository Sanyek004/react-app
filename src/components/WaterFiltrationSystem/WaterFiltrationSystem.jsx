import React from 'react';
import { Avatar } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './WaterFiltrationSystem.css';

const WaterFiltrationSystem = () => {
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
        <div className="plus-icon plus-icon-1">
          <Avatar size={32} icon={<PlusOutlined />} />
        </div>
        <div className="plus-icon plus-icon-2">
          <Avatar size={32} icon={<PlusOutlined />} />
        </div>
        <div className="plus-icon plus-icon-3">
          <Avatar size={32} icon={<PlusOutlined />} />
        </div>
      </div>
    </div>
  );
};

export default WaterFiltrationSystem;