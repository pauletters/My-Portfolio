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
            <a href='/assets/Ryan-Resume.pdf' download className='download-button'>Download Resume</a>
            
            <div className="skills-section">
                <h3>Technical Skills</h3>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h4>Frontend Development</h4>
                        <ul className="skill-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>React</li>
                        </ul>
                    </div>
                    
                    <div className="skill-category">
                        <h4>Backend Development</h4>
                        <ul className="skill-list">
                            <li>Node</li>
                            <li>Express</li>
                            <li>Inquirer</li>
                            <li>Python</li>
                            <li>GraphQL</li>
                            <li>Apollo</li>
                        </ul>
                    </div>
                    
                    <div className="skill-category">
                        <h4>Databases Technologies</h4>
                        <ul className="skill-list">
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                            <li>Sequelize</li>
                        </ul>
                    </div>
                    
                    <div className="skill-category">
                        <h4>Testing & Development</h4>
                        <ul className="skill-list">
                            <li>Cypress</li>
                            <li>Vitest</li>
                            <li>CI/CD</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;