import React from 'react'
import styles from './Home.module.css';
import image1 from './pic1.png';

  
const Home = () => {
  return (
    <div className={styles.main} id='Home'>
      <div className={styles.intro}>
        <h1 style={{fontSize:'70px'}} >Anshul Goyal</h1>
        <h3>Full Stack Web Developer</h3>
        <h5>Competitive Programmer</h5>
        <h5>Open Source Enthusiast</h5>
      </div>
      {/* <img src="https://images.unsplash.com/photo-1696452044585-c6a9389d0c6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="image" className={styles.image}/> */}
      <img src={image1} alt="image 1" className={styles.image} />
    </div>
  )
}

export default Home