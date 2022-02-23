import React from 'react';

function Header() {
  document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }

    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }

    const navLink = document.querySelectorAll('.nav__link');

    function linkAction() {
      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.remove('show-menu');
    }
    navLink.forEach((n) => n.addEventListener('click', linkAction));

    // const sections = document.querySelectorAll('section[id]');

    // function scrollActive() {
    //   const scrollY = window.pageYOffset;

    //   sections.forEach((current) => {
    //     const sectionHeight = current.offsetHeight;
    //     const sectionTop = current.offsetTop - 50;
    //     let sectionId = current.getAttribute('id');

    //     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    //       document
    //         .querySelector('.nav__menu a[href*=' + sectionId + ']')
    //         .classList.add('active-link');
    //     } else {
    //       document
    //         .querySelector('.nav__menu a[href*=' + sectionId + ']')
    //         .classList.remove('active-link');
    //     }
    //   });
    // }
    // window.addEventListener('scroll', scrollActive);

    function scrollHeader() {
      const nav = document.getElementById('header');
      if (this.scrollY >= 80) {
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
      }
    }
    window.addEventListener('scroll', scrollHeader);

    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'uil-sun';

    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

    if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
        darkTheme
      );
      themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
        iconTheme
      );
    }

    themeButton.addEventListener('click', () => {
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      localStorage.setItem('selected-theme', getCurrentTheme());
      localStorage.setItem('selected-icon', getCurrentIcon());
    });
  });

  return (
    <header className='header' id='header'>
      <nav className='nav container'>
        <a href='#home' className='nav__logo'>
          Ocean
        </a>

        <div className='nav__menu' id='nav-menu'>
          <ul className='nav__list grid'>
            <li className='nav__item item-1'>
              <a href='#home' className='nav__link'>
                <i className='uil uil-home nav__icon'></i> Home
              </a>
            </li>
            <li className='nav__item item-2'>
              <a href='#skills' className='nav__link'>
                <i className='uil uil-file-alt nav__icon'></i> Skills
              </a>
            </li>
            <li className='nav__item item-3'>
              <a href='#portfolio' className='nav__link'>
                <i className='uil uil-scenery nav__icon'></i> Portfolio
              </a>
            </li>
            <li className='nav__item item-4'>
              <a
                href='http://oceanabernathy.com/Ocean-Abernathy-Resume.pdf'
                target='_blank'
                rel='noreferrer'
                className='nav__link'
              >
                <i className='uil uil-file-download nav__icon'></i> Resume
              </a>
            </li>
            <li className='nav__item item-5'>
              <a href='#contact' className='nav__link'>
                <i className='uil uil-message nav__icon'></i> Contact
              </a>
            </li>
          </ul>
          <i className='uil uil-times close__icon' id='nav-close'></i>
        </div>
        <div className='nav__buttons'>
          <i className='uil uil-moon change-theme' id='theme-button'></i>

          <div className='nav__toggle' id='nav-toggle'>
            <i className='uil uil-apps toggle__icon'></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
