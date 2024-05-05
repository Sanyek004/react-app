import React, { useState } from 'react';
import { Spin } from 'antd';

const slides = [
  {
    title: 'Компактные системы AquaSmart',
    description: 'С французским клапаном распределения потоков воды',
    mediaUrl: 'https://spaceaqua.ru/upload/resize_webp/iblock/529/400_400_140cd750bba9870f18aada2478b24840a/sl00lg3gylyr0bxooup7b2nq0c0l40b4.webp',
    mediaType: 'image',
    detailsUrl: 'https://example.com/details1'
  },
  {
    title: 'Бесплатный подбор оборудования', 
    description: 'Подберем оборудование индивидуально для вашего дома, квартиры, дачи',
    mediaUrl: 'https://spaceaqua.ru/upload/resize_webp/iblock/13c/400_400_140cd750bba9870f18aada2478b24840a/loh4hpi3nds9fgacdatq06xarnjhb517.webp',
    mediaType: 'image',
    detailsUrl: 'https://example.com/details2'
  },
  {
    title: 'Активированный уголь SpaceCarbon',
    description: 'Высокоэффективный коксовый уголь для очистки питьевой и технологической воды', 
    mediaUrl: 'https://spaceaqua.ru/upload/iblock/c86/f3japdi2b1pl88w1bathbg0ko5i5xgr5.mov',
    mediaType: 'video',
    detailsUrl: 'https://example.com/details3'
  }
];

const HeaderSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div style={{ display: 'flex', margin: '20px' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        <h2>{slides[currentIndex].title}</h2>
        <p>{slides[currentIndex].description}</p>
        <div>
          <a href={slides[currentIndex].detailsUrl}>Подробнее</a>
        </div>
        <div>
          <button onClick={handlePrevClick}>Previous</button>
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
      <div style={{ width: '400px', height: '225px', position: 'relative' }}>
        {slides[currentIndex].mediaType === 'image' ? (
          <img src={slides[currentIndex].mediaUrl} alt="Slide" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        ) : (
          <>
            {!videoLoaded && (
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <Spin />
              </div>
            )}
            <video
              src={slides[currentIndex].mediaUrl}
              onLoadedData={handleVideoLoad}
              loop
              autoPlay
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: videoLoaded ? 'block' : 'none' }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderSlider;