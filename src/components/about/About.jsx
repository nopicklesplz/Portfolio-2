import React from 'react';
import './about.css';
import ME from '../../assets/profile1.JPG';
import {FcDiploma1} from 'react-icons/fc';
import {BsCodeSlash} from 'react-icons/bs';
import CTA from '../header/CTA';

const About = () => {
    return (
        <section id='about'>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt='About Image' />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FcDiploma1 className='about__icon' />
                            <h5>Experience</h5>
                            <small>Full Stack Bootcamp</small>
                        </article>
                        <article className="about__card">
                            <BsCodeSlash className='about__icon' />
                            <h5>Projects</h5>
                            <small>NPM, Git</small>
                        </article>
                    </div>

                    <p>
                        At Nucamp Coding Bootcamp, I acquired a solid foundation in both frontend and backend development. Throughout the bootcamp, I gained hands-on experience in developing web applications utilizing frontend libraries and modern frameworks. Became familiar with backend implementing servers and databases using the MERN stack. Seeking an entry-level software engineer position where I can continue to expand my skill set and make meaningful contributions to cutting-edge software solutions. 
                    </p>

                    <CTA />
                </div>
            </div>
        </section>
    )
}

export default About;