import React from 'react';
import './Main.css';

function Main() {
    return (
        <div className="main__content">
            <svg className="blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0" mask-type="alpha">
                    <path d="M42.5,-12.2C50.8,11.8,50.4,40.2,35,52.4C19.6,64.6,-10.7,60.5,-32.6,44.6C-54.5,28.7,-68.1,1.1,-61.3,-20.8C-54.4,-42.7,-27.2,-58.9,-5.1,-57.3C17.1,-55.6,34.2,-36.1,42.5,-12.2Z"  transform="translate(100 100)" />
                </mask>
                <g mask="url(#mask0)">
                    <path d="M42.5,-12.2C50.8,11.8,50.4,40.2,35,52.4C19.6,64.6,-10.7,60.5,-32.6,44.6C-54.5,28.7,-68.1,1.1,-61.3,-20.8C-54.4,-42.7,-27.2,-58.9,-5.1,-57.3C17.1,-55.6,34.2,-36.1,42.5,-12.2Z" transform="translate(100 100)" />
                    <image x="40" y="48" href="./grayscale-portrait-updated-removebg.png" />
                </g>
            </svg>
        </div>
    )
}

export default Main;