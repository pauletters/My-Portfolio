import React, { useEffect } from 'react';

const Portfolio = ({ setCurrentSection }) => {
        useEffect(() => {
        setCurrentSection('Portfolio');
    }, [setCurrentSection]);
    
   const projects = [
    {
        title: 'Project 1',
        // image: '',
        // deployedLink: '',
        // repoLink: '',
    },
    {
        title: 'Project 2',
        // image: '',
        // deployedLink: '',
        // repoLink: '',
    },
    {
        title: 'Project 3',
        // image: '',
        // deployedLink: '',
        // repoLink: '',
    },
    {
        title: 'Project 4',
        // image: '',
        // deployedLink: '',
        // repoLink: '',
    },
    {
        title: 'Project 5',
        // image: '',
        // deployedLink: '',
        // repoLink: '',
    },
    {
        title: 'Project 6',
        // image: '',
        // deployedLink: '',
        // repoLink: '',
    },
   ];

    return (
        <section>
            <h2>Portfolio</h2>
            <div className='projects'>
            {projects.map((project, index) => (
                <div key={index} className='project'>
                    {/* <img src={project.image} alt={`Screenshot of ${project.title}`} /> */}
                    <h3>{project.title}</h3>
                    <div>
                    {/* <a href={project.deployedLink} target='_blank' rel='noopener noreferrer'>Deployed Application</a>
                    <a href={project.repoLink} target='_blank' rel='noopener noreferrer'>Github Repository</a> */}
                    </div>
                </div>
            ))}
            </div>
        </section>
    );
};

export default Portfolio;