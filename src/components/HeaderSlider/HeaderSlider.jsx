import React, { useState } from 'react';

const slides = [
  {
    title: 'Компактные системы AquaSmart',
    description: 'С французским клапаном распределения потоков воды',
    mediaUrl: 'https://example.com/image1.jpg',
    mediaType: 'image',
    detailsUrl: 'https://example.com/details1'
  },
  {
    title: 'Бесплатный подбор оборудования', 
    description: 'Подберем оборудование индивидуально для вашего дома, квартиры, дачи',
    mediaUrl: 'https://example.com/image2.jpg',
    mediaType: 'image',
    detailsUrl: 'https://example.com/details2'
  },
  {
    title: 'Активированный уголь SpaceCarbon',
    description: 'Высокоэффективный коксовый уголь для очистки питьевой и технологической воды', 
    mediaUrl: 'https://example.com/image3.jpg',
    mediaType: 'image',
    detailsUrl: 'https://example.com/details3'
  }
];

const HeaderSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
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
      <div style={{ width: '400px', height: '225px' }}>
        <img src={slides[currentIndex].mediaUrl} alt="Slide" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  );
};

export default HeaderSlider;