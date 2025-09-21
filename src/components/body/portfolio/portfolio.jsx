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
        title: 'Total Player Knowledge (TPK)',
         image: '/assets/TPK-Screenshot.png',
         description: `
            • A full-stack D&D character management application for creating and managing characters and campaigns
            
            • Built with: MongoDB, Express, React, Node, GraphQL, TypeScript, Apollo, and JWT authentication
            
            • Key contributions: Implemented user authentication, navigation system, about page, and D&D API integration for spells and equipment`,
         deployedLink: 'https://tpk-0wcw.onrender.com',
         repoLink: 'https://github.com/pauletters/TPK',
    },
    {
        title: 'Questionable Intelligence Trivia Game',
         image: '/assets/questionable-intelligence-screenshot.jpg',
         description:`
            • A full-stack Trivia game application for testing your knowledge on a variety of topics
            
            • Built with: PostgreSQL, Express, React, Node, Sequelize, TypeScript, CSS, and JWT authentication
            
            • Key contributions: Implemented user authentication, Login/Sign up form functionality, Application styling and responsiveness`,
         deployedLink: 'https://questionable-intelligence.onrender.com',
         repoLink: 'https://github.com/pauletters/Questionable-Intelligence',
    },
    {
        title: 'Novel Navigator',
         image: '/assets/novelnavigator-screenshot.jpg',
         description: `
            • A full-stack book search application for finding books by title, author, or genre by utilizing the Google Books API
            
            • Built with: MongoDB, Express, React, Node, GraphQL, TypeScript, Apollo, and JWT authentication
            
            • Key contributions: Took pre-established code and converted from REST to GraphQL, updated styling and added pagination 
              and modals for better user interface`,
         deployedLink: 'https://novel-navigator.onrender.com',
         repoLink: 'https://github.com/pauletters/Novel-Navigator',
    },
    {
        title: 'Candidate Search App',
         image: '/assets/candidate-screenshot.jpg',
         description: `
            • A full-stack candidate search application for finding hiring candidates utilizing the GitHub API
            
            • Built with: Express, React, Node, TypeScript, and CSS
            
            • Key contributions: One of my first projects using React. Was responsible for entire front-end functionality and GitHub API 
              integration, updated some styling for better user interface`,
         deployedLink: 'https://candidate-search-app-7n8j.onrender.com',
         repoLink: 'https://github.com/pauletters/Candidate-Search-App',
    },
    {
        title: 'Weather Dashboard App',
         image: '/assets/weatherdashboard-screenshot.jpg',
         description: `
            • A weather dashboard application that allows users to search for a city and view the current weather as well as a 5-day forecast
            
            • Built with: HTML, CSS, Typescript, Express, and Node
            
            • Key contributions: My first project building the entire backend functionality. Utilized the OpenWeather API to get weather data
              and saved user searches to a JSON file for future reference by using their local storage`,
         deployedLink: 'https://weather-dashboard-app-jc5a.onrender.com/',
         repoLink: 'https://github.com/pauletters/Weather-Dashboard-App',
    },
    {
        title: 'Employee Tracker',
         image: '/assets/employeetracker-screenshot.jpg',
         description: `
            • A command-line application that allows users to view and manage a company's departments, roles, and employees
            
            • Built with: PostgreSQL, Node, and Inquirer
            
            • Key contributions: My first project utilizing PostgreSQL and Inquirer. Created a database schema and seeded data to test functionality, then built the application to allow users to view, add, and update employee information`,
         liveDemoLink: 'https://drive.google.com/file/d/1_U7Zfv6YAcGObshMqGb-fd180Fx0jFk4/view?usp=sharing',
         repoLink: 'https://github.com/pauletters/Employee-Tracker',
    },
    {
        title: 'Petfinder Quiz',
         image: '/assets/petfinderquiz-screenshot.jpg',
         description: `
            • A quiz application that helps users find the perfect pet for them based on their answers to a series of seemingly radnom questions
            
            • Built with: HTML, CSS, and JavaScript
            
            • Key contributions: My first project using JavaScript. Responsible for button and progress bar functionality, utilizing local storage to save previous results, and some of the styling features`,
         deployedLink: 'https://tomjp424.github.io/pet-finder-quiz/',
         repoLink: 'https://github.com/Tomjp424/pet-finder-quiz',
    },
   ];

//    The Portfolio component returns a section element with a class name of 'portfolio' which is used to style the component 
//    as well as all the other class names used in the component.
    return (
        <section className='portfolio'>
            <h2>Portfolio</h2>
            <p>Below are some of the projects I have worked on. I am using a free deployment service through Render and as a 
                result, the initial load time may take a few minutes. Thank you for your patience!
            </p>
            <div className='projects-grid'>
            {projects.map((project, index) => (
                <div key={index} className='project-card'>
                    <img src={project.image} alt={`Screenshot of ${project.title}`} />
                    <h3>{project.title}</h3>
                    {project.description && (
                        <p className="description">{project.description}</p>
                    )}
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