import React, { useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://spaceaqua.ru/upload/resize_webp/iblock/060/188_281_140cd750bba9870f18aada2478b24840a/fdh5327l1vd011u5eaid7b18mahnaoz1.webp', // Замените на ваш путь к изображению
      heading: 'Умягчение воды', // Измените заголовок
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a faucibus condimentum, ipsum velit congue nisl, et fringilla eros lorem eget velit.' // Измените текст
    },
    {
      id: 2,
      image: 'https://spaceaqua.ru/upload/resize_webp/iblock/359/188_281_140cd750bba9870f18aada2478b24840a/839m1j3bhjquritsp8dhsirjk3j0wtlx.webp', // Замените на ваш путь к изображению
      heading: 'Коммерческие системы', // Измените заголовок
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a faucibus condimentum, ipsum velit congue nisl, et fringilla eros lorem eget velit.' // Измените текст
    },
    {
      id: 3,
      image: 'https://spaceaqua.ru/upload/resize_webp/iblock/087/188_281_140cd750bba9870f18aada2478b24840a/hjxbmcb4h8ety332t0mn1xkq2jux59id.webp', // Замените на ваш путь к изображению
      heading: 'Для квартиры', // Измените заголовок
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a faucibus condimentum, ipsum velit congue nisl, et fringilla eros lorem eget velit.' // Измените текст
    }
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="slider">
      <div className="slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map(slide => (
          <div key={slide.id} className="card">
            <img src={slide.image} alt={slide.heading} />
            <h3>{slide.heading}</h3>
            <p>{slide.text}</p>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button className="prev" onClick={prevSlide}>Previous</button>
        <button className="next" onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Slider;