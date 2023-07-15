import React from 'react';
import './projects.css';
import BOOT from '../../assets/nucamp.png';
import REACT from '../../assets/react.jpg';
import NAT from '../../assets/native.png';
import POST from '../../assets/postman.jpeg';
import TYPE from '../../assets/typescript.jpg';

const data = [
    {
        id: 1,
        image: BOOT,
        title: 'Bootstrap',
        github: 'https://github.com/nopicklesplz/nuCamp-Bootstrap.git'
    },
    {
        id: 2,
        image: REACT,
        title: 'React',
        github: 'https://github.com/nopicklesplz/NuCamp-React.git'
    },
    {
        id: 3,
        image: NAT,
        title: 'React Native',
        github: 'https://github.com/nopicklesplz/react-native-nucamp.git'
    },
    {
        id: 4,
        image: TYPE,
        title: 'TypeScript',
        github: 'https://github.com/nopicklesplz/typescript-store.git'
    },
    {
        id: 5,
        image: POST,
        title: 'MongoDB',
        github: 'https://github.com/nopicklesplz/node-server.git'
    }
]

const Projects = () => {
    return (
        <section id='projects'>
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="container project__container">
                {
                    data.map(({ id, image, title, github }) => {
                        return (
                            <article className='project__item'>
                                <div className="project__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="project__item-cta">
                                    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects;