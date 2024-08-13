import React, { useEffect } from 'react';
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import '../styles/Home.css';
import '../styles/About.css';
import '../styles/Skills.css';
import '../styles/Project.css';
import '../styles/Contact.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Content />
      </div>
    </BrowserRouter>
  );
}

function Content() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let foundSection = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          foundSection = section.id;
        }
      });

      if (foundSection && location.hash !== `#${foundSection}`) {
        navigate(`#${foundSection}`, { replace: true });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.hash, navigate]);

  return (
    <div className="content">
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
