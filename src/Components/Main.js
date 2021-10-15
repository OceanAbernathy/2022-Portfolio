import React, {Component} from 'react';

class Main extends Component {
    render() {

        const skillsList = document.getElementsByClassName('skills__list'),
              skillsHeader = document.getElementsByClassName('skills__header');

        function toggle() {
            if(skillsList.classList.contains('skills__open')) {
                skillsList.classList.remove('skills__open')
                skillsList.classList.add('skills__close')
            }
            else {
                skillsList.classList.remove('skills__close')
                skillsList.classList.add('skills__open')
            }
        }

        

        return(
            <main className="main__content">
                <span className="overlay"></span>
                <section className="home section" id="home">
                    <div className="home__container container grid">
                        <div className="home__content grid">
                            <div className="home__social">
                                <a href="https://www.linkedin.com/in/ocean-abernathy/" target="_blank" className="home__social-icon">
                                    <i className="uil uil-linkedin-alt social-icon"></i>
                                </a>
                                <a href="https://github.com/OceanAbernathy" target="_blank" className="home__social-icon">
                                    <i className="uil uil-github-alt social-icon"></i>
                                </a>
                                <a href="mailto:ocean.abernathy@gmail.com" target="_blank" className="home__social-icon">
                                    <i className="uil uil-envelope social-icon"></i>
                                </a>
                            </div>
                            <div className="home__img">
                                <svg className="home__blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0" mask-type="alpha">
                                        <path d="M42.5,-12.2C50.8,11.8,50.4,40.2,35,52.4C19.6,64.6,-10.7,60.5,-32.6,44.6C-54.5,28.7,-68.1,1.1,-61.3,-20.8C-54.4,-42.7,-27.2,-58.9,-5.1,-57.3C17.1,-55.6,34.2,-36.1,42.5,-12.2Z"  transform="translate(100 100)" />
                                    </mask>
                                    <g mask="url(#mask0)">
                                        <path d="M42.5,-12.2C50.8,11.8,50.4,40.2,35,52.4C19.6,64.6,-10.7,60.5,-32.6,44.6C-54.5,28.7,-68.1,1.1,-61.3,-20.8C-54.4,-42.7,-27.2,-58.9,-5.1,-57.3C17.1,-55.6,34.2,-36.1,42.5,-12.2Z" transform="translate(100 100)" />
                                        <image className="home__blob-img" x="40" y="48" href="./grayscale-portrait-updated-removebg.png" />
                                    </g>
                                </svg>
                            </div>

                            <div className="home__data">
                                <h1 className="home__title">Hello, my name is Ocean.</h1>
                                <h2 className="home__subtitle">Front-End Web Developer</h2>
                                <p className="home__description"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti iste ex illum consectetur recusandae.</p>
                                <a href="#contact" className="button button--flex contact__button">
                                    Contact Me <i className="uil uil-message button__icon"></i>
                                </a>
                            </div>
                        </div>
                        <div className="home__scroll">
                            <a href="#about" className="home__scroll-button button--flex">
                                <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                                <span className="home__scroll-name">Scroll down</span>
                                <i className="uil uil-arrow-down home__scroll-arrow"></i>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="about section" id="about">
                    <h2 className="section__title">About Me</h2>
                    <span className="section__subtitle">My introduction</span>

                    <div className="about__container container grid">
                        <div className="about__data">
                            <p className="about__description"></p>

                            <div className="about__info">
                                <div>
                                    <span className="about__info-title">08+</span>
                                    <span className="about__info-name">Years <br /> experience</span>
                                </div>

                                <div>
                                    <span className="about__info-title">20+</span>
                                    <span className="about__info-name">Completed <br /> project</span>
                                </div>

                                <div>
                                    <span className="about__info-title">05+</span>
                                    <span className="about__info-name">Companies <br /> worked</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="skills section" id="skills">
                    <h2 className="section__title">Skills</h2>
                    <span className="section__subtitle">My technical level</span>

                    <div className="skills__container container grid">
                        <div>
                            <div className="skills__content">
                                <div className="skills__header">
                                <i className="uil uil-brackets-curly skills__icon"></i>
                                    <div>
                                        <h1 className="skills__title">Frontend developer</h1>
                                        <span className="skills__subtitle">More than 4 years</span>
                                    </div>
                                    <i className="uil uil-angle-down skills__arrow"></i>
                                </div>

                                <div className="skills__list skills__open grid">
                                    <div className="skills__data">
                                        <div className="skills__titles">
                                            <h3 className="skills__name">HTML</h3>
                                            <span className="skills__number">90%</span>
                                        </div>
                                        <div className="skills__bar">
                                            <span className="skills__percentage skills__html"></span>
                                        </div>
                                    </div>

                                    <div className="skills__data">
                                        <div className="skills__titles">
                                            <h3 className="skills__name">CSS</h3>
                                            <span className="skills__number">80%</span>
                                        </div>
                                        <div className="skills__bar">
                                            <span className="skills__percentage skills__css"></span>
                                        </div>
                                    </div>

                                    <div className="skills__data">
                                        <div className="skills__titles">
                                            <h3 className="skills__name">JavaScript</h3>
                                            <span className="skills__number">60%</span>
                                        </div>
                                        <div className="skills__bar">
                                            <span className="skills__percentage skills__js"></span>
                                        </div>
                                    </div>

                                    <div className="skills__data">
                                        <div className="skills__titles">
                                            <h3 className="skills__name">React</h3>
                                            <span className="skills__number">40%</span>
                                        </div>
                                        <div className="skills__bar">
                                            <span className="skills__percentage skills__react"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Main;