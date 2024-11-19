import React, { useEffect } from 'react';
import './resume.css';

// The Resume component is a functional component that displays the resume section of the page. A link is included to download the resume.
const Resume = ({ setCurrentSection }) => {
        useEffect(() => {
        setCurrentSection('Resume');
    }, [setCurrentSection]);
    
    return (
        <section className='resume'>
            <h2>Resume</h2>
            <a href='/assets/Ryan-Resume.pdf' download>Download Resume</a>
            <h3>Technical Skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>GraphQL</li>
                <li>TypeScript</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Sequelize</li>
                <li>React</li>
                <li>Cypress</li>
                <li>Vitest</li>
                <li>Git</li>
            </ul>
        </section>
    );
};

export default Resume;
