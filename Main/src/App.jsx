import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import AboutMe from './components/body/about';
import Footer from './components/footer';
import Portfolio from './components/body/portfolio';
import Contact from './components/body/contact';
import Resume from './components/body/resume';
import './App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState('');
  return (
    <Router>
      <div className="app">
        <Header currentSection={currentSection} />
        <main className="container">
          <Routes>
            <Route path="/" element={<AboutMe setCurrentSection={setCurrentSection} />} />
            <Route path="/portfolio" element={<Portfolio setCurrentSection={setCurrentSection}/>} />
            <Route path="/contact" element={<Contact setCurrentSection={setCurrentSection}/>} />
            <Route path="/resume" element={<Resume setCurrentSection={setCurrentSection}/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
