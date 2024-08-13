import React, { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const elementHeight = rect.bottom - rect.top;
       if (rect.top >= 0 && rect.bottom <= windowHeight) {
        // Element is fully in view
        setAnimate(true);
      } else if (rect.top < windowHeight && rect.bottom > windowHeight - elementHeight) {
        // Element is mostly in view
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    }
  };


    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="contact">
      <h1>GET IN TOUCH</h1>
      <div className={`mains ${animate ? 'mains-enter' : ''}`}>
        <div className="mail">
          <p className="material-symbols-outlined">mail</p>
          <p>MAIL</p>
          <p className="cont">meghasharma4982@gmail.com</p>
        </div>
        <div className="location">
          <p className="material-symbols-outlined">home_pin</p>
          <p>Location</p>
          <p>Jaipur, RJ 302015, IN</p>
        </div>
        <div className="social-git">
          <p>GitHub</p>
          <a href="https://github.com/meghaaa30" target="_blank" rel="noopener noreferrer" role="button">
            <GitHubIcon className="social-link" />
          </a>
        </div>
        <div className="social-linked">
          <p>LinkedIn</p>
          <a href="http://www.linkedin.com/in/megha-sharma-597a80222" target="_blank" rel="noopener noreferrer" role="button">
            <LinkedInIcon className="social-link" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
