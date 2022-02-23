import React from 'react';
import arrowRight from './Icons/arrowRight.svg';
import arrowLeft from './Icons/arrowLeft.svg';

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={
        direction === 'next' ? 'slider__button next' : 'slider__button prev'
      }
    >
      <img src={direction === 'next' ? arrowRight : arrowLeft} alt='' />
    </button>
  );
}
