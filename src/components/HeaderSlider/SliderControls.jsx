import React from 'react';
import PropTypes from 'prop-types';
import './SliderControls.css';

class SliderControls extends React.Component {
  static propTypes = {
    currentSlide: PropTypes.number.isRequired,
    totalSlides: PropTypes.number.isRequired,
    onPrevClick: PropTypes.func.isRequired,
    onNextClick: PropTypes.func.isRequired
  };

  render() {
    const { currentSlide, totalSlides, onPrevClick, onNextClick } = this.props;

    return (
      <div className="slider-controls">
        <button className="slider-controls__button slider-controls__button--prev" onClick={onPrevClick}></button>
        <span className="slider-controls__counter">{currentSlide + 1} / {totalSlides}</span>
        <button className="slider-controls__button slider-controls__button--next" onClick={onNextClick}></button>
      </div>
    );
  }
}

export default SliderControls;
