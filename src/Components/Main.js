import React, { Component } from 'react';
import Slider from './Slider.js';

class Main extends Component {
  state = {
    isSwitchOn: true,
  };

  render() {
    const isOn = this.state.isSwitchOn;

    function scrollUp() {
      const scrollUp = document.getElementById('scroll-up');
      if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
      } else {
        scrollUp.classList.remove('show-scroll');
      }
    }
    window.addEventListener('scroll', scrollUp);

    return (
      <main className='main__content stop-scrolling'>
        <span className='overlay'></span>

        {/* Home */}

        <section className='home section' id='home'>
          <div className='home__container container grid'>
            <div className='home__content   '>
              <div className='home__img'>
                <div className='home__social'>
                  <a
                    href='https://www.linkedin.com/in/ocean-abernathy/'
                    target='_blank'
                    rel='noreferrer'
                    className='home__social-icon'
                  >
                    <i className='uil uil-linkedin-alt social-icon'></i>
                  </a>
                  <a
                    href='https://github.com/OceanAbernathy'
                    target='_blank'
                    rel='noreferrer'
                    className='home__social-icon'
                  >
                    <i className='uil uil-github-alt social-icon'></i>
                  </a>
                  <a
                    href='mailto:ocean.abernathy@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                    className='home__social-icon'
                  >
                    <i className='uil uil-envelope social-icon'></i>
                  </a>
                </div>
                <svg
                  className='home__blob'
                  viewBox='0 0 130 130'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <mask id='mask0' mask-type='alpha'>
                    <path
                      d='M115.5,52.8c8.3,24,7.9,52.4-7.5,64.6s-45.7,8.1-67.6-7.8S4.9,66.1,11.7,44.2C18.6,22.3,45.8,6.1,67.9,7.7
                                        C90.1,9.4,107.2,28.9,115.5,52.8z'
                    />
                  </mask>
                  <g mask='url(#mask0)'>
                    <path
                      d='M115.5,52.8c8.3,24,7.9,52.4-7.5,64.6s-45.7,8.1-67.6-7.8S4.9,66.1,11.7,44.2C18.6,22.3,45.8,6.1,67.9,7.7
                                        C90.1,9.4,107.2,28.9,115.5,52.8z'
                    />
                    <image
                      className='home__blob-img'
                      x='12'
                      y='12'
                      href='./grayscale-portrait-updated-removebg.png'
                    />
                  </g>
                </svg>
              </div>

              <div className='home__data'>
                <h1 className='home__title'>
                  Hello, my name is{' '}
                  <span className='home__title__span'>Ocean</span>.
                </h1>
                <h2 className='home__subtitle'>Front-End Web Developer</h2>
                <p className='home__description'>
                  Passionate about creating a seamless user experience using
                  clean and efficient code.
                </p>
                <a
                  href='#contact'
                  className='button button--flex contact__button'
                >
                  Contact Me <i className='uil uil-message button__icon'></i>
                </a>
              </div>
            </div>
            <div className='home__scroll'>
              <a href='#skills' className='home__scroll-button button--flex'>
                <i className='uil uil-mouse-alt home__scroll-mouse'></i>
                <span className='home__scroll-name'>Scroll down</span>
                <i className='uil uil-arrow-down home__scroll-arrow'></i>
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}

        <div className='main__content__overlay'>
          <section className='skills section' id='skills'>
            <h2 className='section__title'>Skills</h2>
            <span className='skills__section__subtitle'>
              My technical level
            </span>

            <div className='skills__data__container container grid'>
              <div className='skills__data'>
                <div className='skills__info'>
                  <div>
                    <span className='skills__info-title'>02+</span>
                    <span className='skills__info-name'>
                      Years <br /> experience
                    </span>
                  </div>

                  <div>
                    <span className='skills__info-title'>10+</span>
                    <span className='skills__info-name'>
                      Completed <br /> projects
                    </span>
                  </div>

                  <div>
                    <span className='skills__info-title'>03+</span>
                    <span className='skills__info-name'>
                      Completed <br /> courses
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className='skills__container container grid'>
              <div>
                <div className='skills__content'>
                  <div
                    className='skills__header'
                    onClick={() => this.setState({ isSwitchOn: !isOn })}
                  >
                    <i className='uil uil-brackets-curly skills__icon'></i>
                    <div>
                      <h1 className='skills__title'>Front-End Developer</h1>
                      <span className='skills__subtitle'>
                        More than 2 years
                      </span>
                    </div>
                    <i
                      className={
                        isOn
                          ? 'uil uil-angle-down skills__arrow'
                          : 'uil uil-angle-down skills__arrow skills__arrow__flip'
                      }
                    ></i>
                  </div>

                  <div
                    className={
                      isOn
                        ? 'skills__list skills__open grid'
                        : 'skills__list skills__close grid'
                    }
                  >
                    <div className='skills__data'>
                      <div className='skills__titles'>
                        <h3 className='skills__name'>HTML</h3>
                        <span className='skills__number'>90%</span>
                      </div>
                      <div className='skills__bar'>
                        <span className='skills__percentage skills__html'></span>
                      </div>
                    </div>

                    <div className='skills__data'>
                      <div className='skills__titles'>
                        <h3 className='skills__name'>CSS</h3>
                        <span className='skills__number'>70%</span>
                      </div>
                      <div className='skills__bar'>
                        <span className='skills__percentage skills__css'></span>
                      </div>
                    </div>

                    <div className='skills__data'>
                      <div className='skills__titles'>
                        <h3 className='skills__name'>JavaScript</h3>
                        <span className='skills__number'>50%</span>
                      </div>
                      <div className='skills__bar'>
                        <span className='skills__percentage skills__js'></span>
                      </div>
                    </div>

                    <div className='skills__data'>
                      <div className='skills__titles'>
                        <h3 className='skills__name'>React</h3>
                        <span className='skills__number'>40%</span>
                      </div>
                      <div className='skills__bar'>
                        <span className='skills__percentage skills__react'></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio */}

          <section className='portfolio section' id='portfolio'>
            <h2 className='section__title'>Portfolio</h2>
            <span className='portfolio__subtitle'>Most recent work</span>

            <div className='portfolio__container container'>
              <Slider />
            </div>
          </section>

          {/* Contact */}

          <section className='contact section' id='contact'>
            <h2 className='section__title'>Contact Me</h2>
            <span className='section__subtitle'>Get in touch</span>

            <div className='contact__container container grid'>
              <div>
                <div className='contact__information'>
                  <i className='uil uil-phone contact__icon'></i>

                  <div>
                    <h3 className='contact__title'>Call Me</h3>
                    <span className='contact__subtitle'>314-659-7788</span>
                  </div>
                </div>

                <div className='contact__information'>
                  <i className='uil uil-envelope contact__icon'></i>

                  <div>
                    <h3 className='contact__title'>Email</h3>
                    <span className='contact__subtitle'>
                      ocean.abernathy@gmail.com
                    </span>
                  </div>
                </div>

                <div className='contact__information'>
                  <i className='uil uil-map-marker contact__icon'></i>

                  <div>
                    <h3 className='contact__title'>Location</h3>
                    <span className='contact__subtitle'>Phoenix, AZ</span>
                  </div>
                </div>
              </div>

              <form
                action='mailto:ocean.abernathy@gmail.com'
                method='POST'
                encType='multipart/form-data'
                name='EmailForm'
                className='contact__form grid'
              >
                <div className='contact__inputs grid'>
                  <div className='contact__content'>
                    <label htmlFor='' className='contact__label'>
                      Name
                    </label>
                    <input type='text' className='contact__input' />
                  </div>
                  <div className='contact__content'>
                    <label htmlFor='' className='contact__label'>
                      Email
                    </label>
                    <input type='email' className='contact__input' />
                  </div>
                </div>
                <div className='contact__content'>
                  <label htmlFor='' className='contact__label'>
                    Message
                  </label>
                  <textarea
                    name=''
                    id=''
                    cols='0'
                    rows='7'
                    className='contact__input'
                  ></textarea>
                </div>

                <div>
                  <button className='message__button button button--flex'>
                    Send Message
                    <i className='uil uil-message button__icon'></i>
                  </button>
                </div>
              </form>
            </div>
          </section>

          <footer className='footer'>
            <div className='footer__bg'>
              <div className='footer__container container grid'>
                <div className='title__container'>
                  <h1 className='footer__title'>Ocean</h1>
                  <span className='footer__subtitle'>
                    Front-End Wev Developer
                  </span>
                </div>

                <ul className='footer__links'>
                  <li>
                    <a href='#skills' className='footer__link'>
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href='#portfolio' className='footer__link'>
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href='#contact' className='footer__link'>
                      Contact Me
                    </a>
                  </li>
                </ul>

                <p className='footer__copy'>&#169; 2021 Ocean Abernathy</p>
              </div>
            </div>
          </footer>

          <a href='#' className='scrollup' id='scroll-up'>
            <i className='uil uil-arrow-up scrollup__icon'></i>
          </a>
        </div>
      </main>
    );
  }
}

export default Main;
