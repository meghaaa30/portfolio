import React from "react";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Project from './Project'
import Contact from './Contact'
import About from './About'

function App() {
  return (
    
      <BrowserRouter>
      <div className="App">
      <Header />
      <Routes>
             
              <Route path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/project" component={Project} />
            </Routes>
            </div>
      </BrowserRouter>
   
  );
}

export default App;
