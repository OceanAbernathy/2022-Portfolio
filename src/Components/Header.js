import React from 'react';
import { UilHome } from '@iconscout/react-unicons';
import { UilUser } from '@iconscout/react-unicons';
import { UilFileAlt } from '@iconscout/react-unicons';
import { UilScenery } from '@iconscout/react-unicons';
import { UilMessage } from '@iconscout/react-unicons';
import { UilFileDownload } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';
import { UilApps } from '@iconscout/react-unicons';

function Header() {

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
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    return (
        <div className="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Ocean</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <UilHome className="uil nav__icon" /> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <UilUser className="uil nav__icon" /> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <UilFileAlt className="uil nav__icon" /> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <UilScenery className="uil nav__icon" /> Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <UilFileDownload className="uil nav__icon" /> Resume
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <UilMessage className="uil nav__icon" /> Contact
                            </a>
                        </li>
                    </ul>
                    <UilTimes className="uil close__icon" id="nav-close" />
                </div>
                <div className="nav__buttons">
                    <div className="nav__toggle" id="nav-toggle">
                        <UilApps className="uil toggle__icon" />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;