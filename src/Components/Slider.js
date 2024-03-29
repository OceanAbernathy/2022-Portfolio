import React, { useState } from 'react';
import BtnSlider from './BtnSlider.js';
import dataSlider from './dataSlider.js';

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className='slider__container'>
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
          >
            <div className='slider__projects'>
              <img
                className='slider__img'
                src={process.env.PUBLIC_URL + `/Img/img${index + 1}.jpg`}
                alt=''
              />
              <div className='container__dots'>
                {Array.from({ length: dataSlider.length }).map(
                  (item, index) => (
                    <div
                      key={index}
                      onClick={() => moveDot(index + 1)}
                      className={
                        slideIndex === index + 1 ? 'dot active' : 'dot'
                      }
                    ></div>
                  )
                )}
              </div>
            </div>
            <div className='slider__data'>
              <h3 className='slider__img__title'>{obj.title}</h3>
              <p className='slider__img__about'>{obj.about}</p>
              <div className='slider__data__icons'>
                <a href={obj.git} target='_blank' rel='noreferrer'>
                  <i className='uil uil-github-alt left__icon'></i>
                </a>
                <a href={obj.url} target='_blank' rel='noreferrer'>
                  <i className='uil uil-message right__icon'></i>
                </a>
              </div>
            </div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />
    </div>
  );
}
