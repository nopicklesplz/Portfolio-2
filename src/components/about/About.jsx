import React from 'react';
import './about.css';
import ME from '../../assets/profile1.JPG';
import {FcDiploma1} from 'react-icons/fc';
import {BsCodeSlash} from 'react-icons/bs';

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
                            <small>React, NodeJs</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit libero asperiores nulla molestiae, ut excepturi laborum in odio maiores maxime, assumenda iusto. Temporibus impedit, eveniet aperiam sunt sapiente culpa.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;