import React, { useEffect, useRef } from 'react'
import styles from './Home.module.css';
import image1 from './pic1.png';
import Typed from 'typed.js';


  
const Home = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Full Stack Web Developer','Competitive Programmer', 'Open Source Contributor','Full Stack Web Developer'],
      typeSpeed: 50,
      backSpeed: 30,
    };

    const typed = new Typed(typingRef.current, options);

    // Clean up the Typed instance on component unmount 
    return () => {
      typed.destroy();
    };
  }, []); 
  return (
    <div className={styles.main} id='Home'>
      <div className={styles.intro}>
        <h1 style={{fontSize:'70px'}} >Anshul Goyal</h1>
        <span style={{fontSize:'30px'}} ref={typingRef}></span>
      </div>
      {/* <img src="https://images.unsplash.com/photo-1696452044585-c6a9389d0c6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="image" className={styles.image}/> */}
      <img src={image1} alt='ji' className={styles.imagge} />
    </div>
  )
}

export default Home