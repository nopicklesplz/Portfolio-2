import React from 'react';
import './projects.css';
import BOOT from '../../assets/nucamp.png';

const data = [
    {
        id: 1,
        image: BOOT,
        title: 'Bootstrap',
        github: 'https://github.com/nopicklesplz/nuCamp-Bootstrap.git'
    },
    {
        id: 2,
        image: BOOT,
        title: 'React',
        github: 'https://github.com/nopicklesplz/NuCamp-React.git'
    },
    {
        id: 3,
        image: BOOT,
        title: 'React Native',
        github: 'https://github.com/nopicklesplz/react-native-nucamp.git'
    },
    {
        id: 4,
        image: BOOT,
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