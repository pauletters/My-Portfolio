import React, { useEffect } from 'react';
import './portfolio.css';

const Portfolio = ({ setCurrentSection }) => {
        useEffect(() => {
        setCurrentSection('Portfolio');
    }, [setCurrentSection]);
    
   const projects = [
    {
        title: 'Petfinder Quiz',
         image: './src/assets/petfinderquiz-screenshot.jpg',
         deployedLink: 'https://tomjp424.github.io/pet-finder-quiz/',
         repoLink: 'https://github.com/Tomjp424/pet-finder-quiz',
    },
    {
        title: 'Weather Dashboard App',
         image: './src/assets/weatherdashboard-screenshot.jpg',
         deployedLink: 'https://weather-dashboard-app-jc5a.onrender.com/',
         repoLink: 'https://github.com/pauletters/Weather-Dashboard-App',
    },
    {
        title: 'Employee Tracker',
         image: './src/assets/employeetracker-screenshot.jpg',
         deployedLink: 'https://drive.google.com/file/d/1_U7Zfv6YAcGObshMqGb-fd180Fx0jFk4/view?usp=sharing',
         repoLink: 'https://github.com/pauletters/Employee-Tracker',
    },
    {
        title: 'Vehicle Builder',
         image: './src/assets/vehiclebuilder-screenshot.jpg',
         deployedLink: 'https://drive.google.com/file/d/1pwrYICcUN2BfKtX_KCkZesVdKhtPqasJ/view',
         repoLink: 'https://github.com/pauletters/Vehicle-Builder?tab=readme-ov-file',
    },
    {
        title: 'Readme Generator',
         image: './src/assets/readmegenerator-screenshot.jpg',
         deployedLink: 'https://drive.google.com/file/d/1LjZ4mqHSOVHYktlrs6KSboskx5bhbq7h/view',
         repoLink: 'https://github.com/pauletters/README-Generator?tab=readme-ov-file',
    },
    {
        title: 'Study Guide',
         image: './src/assets/studyguide-screenshot.jpg',
         deployedLink: 'https://pauletters.github.io/prework-study-guide/',
         repoLink: 'https://github.com/pauletters/prework-study-guide',
    },
   ];

    return (
        <section className='portfolio'>
            <h2>Portfolio</h2>
            <div className='projects-grid'>
            {projects.map((project, index) => (
                <div key={index} className='project-card'>
                    <img src={project.image} alt={`Screenshot of ${project.title}`} />
                    <h3>{project.title}</h3>
                    <div className='project-links'>
                    <a href={project.deployedLink} target='_blank' rel='noopener noreferrer'>Deployed Application</a>
                    <a href={project.repoLink} target='_blank' rel='noopener noreferrer'>Github Repository</a>
                    </div>
                </div>
            ))}
            </div>
        </section>
    );
};

export default Portfolio;