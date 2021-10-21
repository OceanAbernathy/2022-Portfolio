import React, {useState} from 'react';
import BtnSlider from './BtnSlider.js';
import dataSlider from './dataSlider.js';

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1);
        }
        else if(slideIndex === dataSlider.length) {
            setSlideIndex(1);
        }
    };
    const prevSlide = () => {
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        }
        else if(slideIndex === 1) {
            setSlideIndex(dataSlider.length);
        }
    };

    const moveDot = index => {
        setSlideIndex(index);
    };

    return (
        <div className="slider__container">
            {dataSlider.map((obj, index) => {
                return (
                    <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        <img
                        src={process.env.PUBLIC_URL + `/Img/img${index + 1}.jpg`} alt="" 
                        />
                        <p className="slider__img__title">{obj.title}</p>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container__dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
};