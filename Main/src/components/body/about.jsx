import { useEffect } from 'react';

const AboutMe = ({ setCurrentSection }) => {
    useEffect(() => {
    setCurrentSection('About Me');
  }, [setCurrentSection]);

  return (
    <section>
      <h2>About Me</h2>
      <img src='/assets/Bio-Pic.jpg' alt='Image of Ryan Paulette' />
      <p>
       I am an up and coming web developer currently making my way through a coding bootcamp with the University of Richmond. 
       So far I have experience using HTML, CSS, JavaScript, Node.js, Express.js, TypeScript, PostGres SQL, and React.
      </p>
    </section>
  );
};

export default AboutMe;