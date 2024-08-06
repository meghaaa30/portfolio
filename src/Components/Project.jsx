import React from 'react';
import books from "../images/books.png";

function Project() {
  return (
    <div>
      <section id="project">
        <div className='heading'>Project</div>
        <div className='project-image-layout'>
          <div className='project-about-text'>
            <h1>Project</h1>
            
            <div className='project-text'>
              <h2>Book-Blog</h2>
              <p>A book-review website made using MERN.
              Book-Blog provides an online portal where book enthusiasts can immerse themselves in a rich community of literary reviews. Readers can effortlessly search for reviews on their favorite books and explore a diverse array of opinions. Users can also contribute their own reviews, sharing their unique perspectives with others. Whether you're looking to discover new reads or share your thoughts on the latest bestseller, our platform offers a seamless and engaging experience for all.</p>
           </div>
          </div>
            <img className='image-shadow-project' src={books} alt="" />
          
         
        </div>
      </section>
    </div>
  );
}

export default Project;
