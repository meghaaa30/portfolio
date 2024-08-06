import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Skills from './Skills'
import Project from './Project';
import Contact from './Contact';
import '../styles/Home.css'
import '../styles/About.css'
import '../styles/Skills.css'
import '../styles/Home.css'
import '../styles/Project.css'
import '../styles/Contact.css'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <div className="content">
          <Home />
          <About />
          <Skills />
          <Project />
          <Contact />
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
