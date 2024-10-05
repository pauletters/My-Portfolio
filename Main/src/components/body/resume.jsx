import React, { useEffect } from 'react';
import './resume.css';

const Resume = ({ setCurrentSection }) => {
        useEffect(() => {
        setCurrentSection('Resume');
    }, [setCurrentSection]);
    
    return (
        <section className='resume'>
            <h2>Resume</h2>
            <a href='/assets/Resume.pdf' download>Download Resume</a>
            <h3>Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>TypeScript</li>
                <li>PostGres SQL</li>
                <li>React</li>
            </ul>
        </section>
    );
};

export default Resume;