/* eslint-disable */

import React from 'react';

function Header() {

    document.addEventListener("DOMContentLoaded", function(){
        const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');
  
        if(navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.add('show-menu')
            })
        };

        if(navClose) {
            navClose.addEventListener('click', () => {
                navMenu.classList.remove('show-menu')
            })
        };

        const navLink = document.querySelectorAll('.nav__link')

        function linkAction(){
            const navMenu = document.getElementById('nav-menu')
            navMenu.classList.remove('show-menu')
        }
        navLink.forEach(n => n.addEventListener('click', linkAction))
    });

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Ocean</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                            <i className="uil uil-home nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                            <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="http://oceanabernathy.com/Ocean-Abernathy-Resume.pdf" target="_blank" rel='noreferrer' className="nav__link">
                            <i className="uil uil-file-download nav__icon"></i> Resume
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times close__icon" id="nav-close"></i>
                </div>
                <div className="nav__buttons">
                    <div className="nav__toggle" id="nav-toggle">
                        <i className="uil uil-apps toggle__icon"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;