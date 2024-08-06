import React, { useEffect , useState} from 'react';
function Home() {
  const [animate, setAnimate] = useState(false);
  
  useEffect(()=>{
    const handleScroll = () => {
     const homeSection = document.getElementById('home');
    if(homeSection){
      const rect= homeSection.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const elementHeight = rect.bottom - rect.top;
       console.log('Top:', rect.top, 'Bottom:', rect.bottom); 
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
    <div>
      <section id="home"> 
       <div className= {`Home ${animate? 'home-enter': ''} `}>
        <h1>
          <div className='first'>
          Hey, I'm 
          </div>
          <div className='second'>
           Megha Sharma
           </div>
        </h1>
        <p>I am a full stack web developer </p>
        {/* </div> */}
        </div>
      </section>
     </div>
  );
}

export default Home;
