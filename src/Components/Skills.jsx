import React, { useState } from 'react';
import Express from '../images/express.jpg';
import Mongo from '../images/mongo.png';
import Github from '../images/github.jpg';
import git from '../images/git.png';
import node from '../images/node.js.png';
import react from '../images/react (2).png';
import c from '../images/c++.png';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import sql from '../images/sql.png';

const skillsData = [
  { src: Express, alt: 'ExpressJS', proficiency: 30 },
  { src: Mongo, alt: 'MongoDB', proficiency: 60 },
  { src: Github, alt: 'GitHub', proficiency: 65 },
  { src: git, alt: 'Git', proficiency: 60 },
  { src: node, alt: 'NodeJS', proficiency: 55 },
  { src: react, alt: 'React', proficiency: 80 },
  { src: c, alt: 'C++', proficiency: 75 },
  { src: html, alt: 'HTML', proficiency: 85 },
  { src: css, alt: 'CSS', proficiency: 80 },
  { src: js, alt: 'JavaScript', proficiency: 75 },
  { src: sql, alt: 'PostgreSQL', proficiency: 40 },
];

function Skills() {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleClick = (index) => {
    setSelectedSkills((prevSelectedSkills) => 
      prevSelectedSkills.includes(index)
        ? prevSelectedSkills.filter((i) => i !== index)
        : [...prevSelectedSkills, index]
    );
  };

  return (
    
      <section id="skills">
        <h1>Technical Skills</h1>
        <div className='skills'>
          <div className='images'>
            {skillsData.map((skill, index) => (
              <div key={index} className='tags' onClick={() => handleClick(index)}>
                <img className='pic' src={skill.src} alt={skill.alt} />
                <p>{skill.alt}</p>
                <div className='skill-info'>
                  <div className='progress-bar'>
                    <div
                      className='progress'
                      style={{ width: selectedSkills.includes(index) ? `${skill.proficiency}%` : '0%' }}
                    ></div>
                  </div>
                  {selectedSkills.includes(index) && <p>{skill.proficiency}%</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
  );
}

export default Skills;
