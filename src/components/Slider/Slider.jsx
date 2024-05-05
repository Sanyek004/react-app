import React, { useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Slider.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://spaceaqua.ru/upload/resize_webp/iblock/359/188_281_140cd750bba9870f18aada2478b24840a/839m1j3bhjquritsp8dhsirjk3j0wtlx.webp',
      heading: 'Для скважины и коттеджа',
      backgroundColor: '#2C3E50',
    },
    {
      id: 2,
      image: 'https://spaceaqua.ru/upload/resize_webp/iblock/060/188_281_140cd750bba9870f18aada2478b24840a/fdh5327l1vd011u5eaid7b18mahnaoz1.webp',
      heading: 'Коммерческие осмосы',
      backgroundColor: '#2C3E50',
    },
    {
      id: 3,
      image: 'https://spaceaqua.ru/upload/resize_webp/iblock/087/188_281_140cd750bba9870f18aada2478b24840a/hjxbmcb4h8ety332t0mn1xkq2jux59id.webp',
      heading: 'Обезжелезивание и аэрация',
      backgroundColor: '#2C3E50',
    },
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="slider">
      <div className="slide-container">
        <TransitionGroup>
          <CSSTransition
            key={slides[currentSlide].id}
            timeout={300}
            classNames="fade"
          >
            <div className="slide">
              <div className="slide-content">
                <div className="card" style={{ backgroundColor: slides[currentSlide].backgroundColor }}>
                  <img src={slides[currentSlide].image} alt={slides[currentSlide].heading} />
                  <h3>{slides[currentSlide].heading}</h3>
                </div>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
        <div className="navigation">
          <LeftOutlined className="prev" onClick={prevSlide} />
          <RightOutlined className="next" onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Slider;