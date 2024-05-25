import React, { useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './Slider.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    [
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
    ],
    [
      {
        id: 4,
        image: 'https://spaceaqua.ru/upload/resize_webp/iblock/e24/188_281_140cd750bba9870f18aada2478b24840a/x5dz7c0x1b8e2nmlerzbvtnq87svdqhw.webp',
        heading: 'Умягчение воды',
        backgroundColor: '#2C3E50',
      },
      {
        id: 5,
        image: 'https://spaceaqua.ru/upload/resize_webp/iblock/4c1/188_281_140cd750bba9870f18aada2478b24840a/xjboyb85hzos7jppk3kkw29stf9lifqs.webp',
        heading: 'Коммерческие основы',
        backgroundColor: '#2C3E50',
      },
      {
        id: 6,
        image: 'https://spaceaqua.ru/upload/resize_webp/iblock/e2a/188_281_140cd750bba9870f18aada2478b24840a/n2qojywcr2v5yd39168pp6ybf5kk53l2.webp',
        heading: 'Для квартиры',
        backgroundColor: '#2C3E50',
      },
    ],
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
      <div className="slide-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slideSet, index) => (
          <div className="slide" key={index}>
            {slideSet.map((card) => (
              <div key={card.id} className="card" style={{ backgroundColor: card.backgroundColor }}>
                <img src={card.image} alt={card.heading} />
                <h3>{card.heading}</h3>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="navigation">
        <LeftOutlined className="prev" onClick={prevSlide} />
        <RightOutlined className="next" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Slider;
