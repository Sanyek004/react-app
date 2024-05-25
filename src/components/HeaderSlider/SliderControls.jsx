import React from 'react';
import './SliderControls.css';

// Импортируем иконки
import prevIcon from './icons/prev.png';
import nextIcon from './icons/next.png';

const SliderControls = ({ onPrevClick, onNextClick }) => {
  return (
    <div className="slider-controls">
      <button className="slider-controls__button slider-controls__button--prev" onClick={onPrevClick}>
        {/* Используем иконку как background-image */}
      </button>
      <button className="slider-controls__button slider-controls__button--next" onClick={onNextClick}>
        {/* Используем иконку как background-image */}
      </button>
    </div>
  );
};

export default SliderControls;
