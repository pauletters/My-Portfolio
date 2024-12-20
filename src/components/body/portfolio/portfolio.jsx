import React, { useEffect } from 'react';
import './portfolio.css';

// The Portfolio component is a functional component that displays a list of projects. 
// It uses the useEffect hook to set the current section of the page to 'Portfolio' when the component is rendered.
// Reminder: place any new images in the public/assets folder.
const Portfolio = ({ setCurrentSection }) => {
        useEffect(() => {
        setCurrentSection('Portfolio');
    }, [setCurrentSection]);
     
   const projects = [
    {
        title: 'Questionable Intelligence Trivia Game',
         image: '/assets/questionable-intelligence-screenshot.jpg',
         deployedLink: 'https://questionable-intelligence.onrender.com',
         repoLink: 'https://github.com/pauletters/Questionable-Intelligence',
    },
    {
        title: 'Novel Navigator',
         image: '/assets/novelnavigator-screenshot.jpg',
         deployedLink: 'https://novel-navigator.onrender.com',
         repoLink: 'https://github.com/pauletters/Novel-Navigator',
    },
    {
        title: 'Candidate Search App',
         image: '/assets/candidate-screenshot.jpg',
         deployedLink: 'https://candidate-search-app-7n8j.onrender.com',
         repoLink: 'https://github.com/pauletters/Candidate-Search-App',
    },
    {
        title: 'Weather Dashboard App',
         image: '/assets/weatherdashboard-screenshot.jpg',
         deployedLink: 'https://weather-dashboard-app-jc5a.onrender.com/',
         repoLink: 'https://github.com/pauletters/Weather-Dashboard-App',
    },
    {
        title: 'Employee Tracker',
         image: '/assets/employeetracker-screenshot.jpg',
         liveDemoLink: 'https://drive.google.com/file/d/1_U7Zfv6YAcGObshMqGb-fd180Fx0jFk4/view?usp=sharing',
         repoLink: 'https://github.com/pauletters/Employee-Tracker',
    },
    {
        title: 'Petfinder Quiz',
         image: '/assets/petfinderquiz-screenshot.jpg',
         deployedLink: 'https://tomjp424.github.io/pet-finder-quiz/',
         repoLink: 'https://github.com/Tomjp424/pet-finder-quiz',
    },
   ];

//    The Portfolio component returns a section element with a class name of 'portfolio' which is used to style the component 
//    as well as all the other class names used in the component.
    return (
        <section className='portfolio'>
            <h2>Portfolio</h2>
            <div className='projects-grid'>
            {projects.map((project, index) => (
                <div key={index} className='project-card'>
                    <img src={project.image} alt={`Screenshot of ${project.title}`} />
                    <h3>{project.title}</h3>
                    <div className='project-links'>
                    {project.deployedLink && (
                                <a href={project.deployedLink} target='_blank' rel='noopener noreferrer'>
                                    Deployed Application
                                </a>
                            )}
                            {project.liveDemoLink && (
                                <a href={project.liveDemoLink} target='_blank' rel='noopener noreferrer'>
                                    Live Demo
                                </a>
                            )}
                            {project.repoLink && (
                                <a href={project.repoLink} target='_blank' rel='noopener noreferrer'>
                                    Github Repository
                                </a>
                            )}
                    </div>
                </div>
            ))}
            </div>
        </section>
    );
};

export default Portfolio;