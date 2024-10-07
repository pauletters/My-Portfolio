import { useLocation, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './header.css';

// The Header component is a functional component that displays the header of the page. 
// It uses the useLocation hook to get the current location of the page.
const Header = ({ currentSection}) => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState(currentSection);
  
    // The useEffect hook is used to set the active section of the page based on the current location.
    useEffect(() => {
      const path = location.pathname;
      if (path === '/') setActiveSection('About Me');
      else if (path === '/portfolio') setActiveSection('Portfolio');
      else if (path === '/contact') setActiveSection('Contact');
      else if (path === '/resume') setActiveSection('Resume');
    }, [location]);
  
    // The header component displays the header of the page with navigation links to the different sections.
    return (
      <header>
        <div className='container'>
        <h1>Ryan Paulette</h1>
        <nav>
          <NavLink to="/" className={activeSection === 'About Me' ? 'active' : ''}>
            About Me
          </NavLink>
          <NavLink to="/portfolio" className={activeSection === 'Portfolio' ? 'active' : ''}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" className={activeSection === 'Contact' ? 'active' : ''}>
            Contact
          </NavLink>
          <NavLink to="/resume" className={activeSection === 'Resume' ? 'active' : ''}>
            Resume
          </NavLink>
        </nav>
        </div>
      </header>
    );
  };

export default Header;