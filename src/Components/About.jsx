import React from 'react';
import photo from "../images/photo.jpeg";

function About() {
    

    return (
        <div>
            <section id="about"> 
                <div className='image-layout'>
                    <div className='about'>ABOUT ME</div>
                    <img className='image-shadow' src={photo} alt="Profile" />
                    <div className='about-text'>
                        <h1>ABOUT ME</h1>
                        <p>
                            Hey, I'm Megha Sharma. I am a passionate and dedicated full stack web developer and tech enthusiast.
                            I'm always curious to learn new tools and technologies.
                            I also have a strong interest in data structures and algorithms (DSA), which helps me write efficient, scalable code and tackle complex problems.
                        </p>
                        <div className="resume">
                    <a href="/Megha-Sharma-Resume.pdf" target="_blank"
                        rel="noreferrer">Resume</a>
                </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
