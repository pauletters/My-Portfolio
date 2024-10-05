import { useEffect } from 'react';
import './about.css';

const AboutMe = ({ setCurrentSection }) => {
    useEffect(() => {
    setCurrentSection('About Me');
  }, [setCurrentSection]);

  return (
    <section className='about-me'>
      <div>
      <img src='src/assets/Bio-Pic.jpg' alt='Image of Ryan Paulette' />
      <h2>About Me</h2>
      <p>
       I am an up and coming web developer currently making my way through a coding bootcamp with the University of Richmond. 
       So far I have experience using HTML, CSS, JavaScript, Node.js, Express.js, TypeScript, PostGres SQL, and React.
      </p>
      </div>
    </section>
  );
};

export default AboutMe;