import { useEffect } from 'react';
import './about.css';

// The AboutMe component is a functional component that displays the about me section of the page.
const AboutMe = ({ setCurrentSection }) => {
    useEffect(() => {
    setCurrentSection('About Me');
  }, [setCurrentSection]);

  return (
    <section className='about-me'>
      <div>
      <img src='/assets/Bio-Pic.jpg' alt='Image of Ryan Paulette' />
      <h2>About Me</h2>
      <p>
      I am a native of Richmond, Virginia and a graduate of Virginia Commonwealth University with a passion for both 
      technology and creativity. When I'm not coding, you'll find me gathered around a table with friends for board games 
      and D&D campaigns, or immersed in the latest Brandon Sanderson novel. This love for immersive experiences extends beyond 
      the page—I've explored ten different countries so far, each journey adding new perspectives to both my personal and 
      professional outlook.
      </p>

      <p>
      My unique career path so far includes experience in law enforcement and craft brewing, having worked at both a local 
      brewery and a national operation. These diverse roles have shaped me into a detail-oriented professional who thrives in 
      fast-paced, collaborative environments. Each position has reinforced the importance of precision, teamwork, and 
      adaptability—skills that translate perfectly to software development.
      </p>
      
      <p>
      Currently, I'm expanding my technical expertise through the University of Richmond's Full Stack Development Bootcamp. 
      I've built a strong foundation in modern web technologies including HTML, CSS, JavaScript, TypeScript, and React, along 
      with backend technologies such as Node.js, Express.js, PostgreSQL, and MongoDB. I complement these technical skills with 
      database management through Sequelize, enabling me to create comprehensive, scalable applications.
      </p>
      </div>
    </section>
  );
};

export default AboutMe;
