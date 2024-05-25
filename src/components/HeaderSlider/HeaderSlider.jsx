import React, { useState } from 'react';
import { Spin } from 'antd';
import { CSSTransition } from 'react-transition-group';
import SliderControls from './SliderControls';
import './HeaderSlider.css';

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
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevClick = () => {
    handleSlideChange(currentIndex - 1);
  };

  const handleNextClick = () => {
    handleSlideChange(currentIndex + 1);
  };

  const handleSlideChange = (newIndex) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((newIndex + slides.length) % slides.length);
      setIsAnimating(false);
    }, 500);
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="header-slider">
      <div className="header-slider__content">
        <CSSTransition
          in={!isAnimating}
          timeout={500}
          classNames="slide"
          unmountOnExit
        >
          <div className="header-slider__text">
            <h2>{slides[currentIndex].title}</h2>
            <p>{slides[currentIndex].description}</p>
            <div>
              <a href={slides[currentIndex].detailsUrl} className="header-slider__button">Подробнее об итогах выставки</a>
            </div>
          </div>
        </CSSTransition>
        <div className="header-slider__controls">
          <SliderControls 
            onPrevClick={handlePrevClick} 
            onNextClick={handleNextClick} 
            currentIndex={currentIndex} 
            totalSlides={slides.length} 
          />
        </div>
      </div>
      <div className="header-slider__media">
        <CSSTransition
          in={!isAnimating}
          timeout={500}
          classNames="slide"
          unmountOnExit
        >
          <div>
            {slides[currentIndex].mediaType === 'image' ? (
              <img
                src={slides[currentIndex].mediaUrl}
                alt="Slide"
                className="header-slider__media-item"
              />
            ) : (
              <>
                {!videoLoaded && (
                  <div className="header-slider__spinner">
                    <Spin />
                  </div>
                )}
                <video
                  src={slides[currentIndex].mediaUrl}
                  onLoadedData={handleVideoLoad}
                  loop
                  autoPlay
                  className="header-slider__media-item"
                />
              </>
            )}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default HeaderSlider;