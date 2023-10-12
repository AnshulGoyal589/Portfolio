import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Sidebar.module.css'

import { AiFillTwitterCircle,AiFillInstagram,AiFillLinkedin,AiFillGithub } from 'react-icons/ai';






  const Sidebar = () => {
    
      const scrollToSpecificID = (e) => {
        const name=e.target.innerText
        const element = document.getElementById(name);
        element.scrollIntoView({ behavior: 'smooth' });
      };
  
  return (
    <div className={styles.main}>
      
      <img className={styles.image} src="https://images.unsplash.com/photo-1696537768579-705244eb77c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="profile photo" />
      <h2 className={styles.name} >Anshul Goyal</h2>
      <div className={styles.social}>
        <a href="https://twitter.com/AnshulG70118665"><AiFillTwitterCircle class={styles.twitter} /></a>
        <a href="https://github.com/AnshulGoyal589"><AiFillGithub class={styles.twitter} /></a>
        <a href="https://www.linkedin.com/in/anshul-goyal-a9b537254/"><AiFillLinkedin class={styles.twitter} /></a>
        <a href="https://www.instagram.com/anshull.ai/"><AiFillInstagram class={styles.twitter} /></a>
      </div>
      <div className={styles.home}>
        <i class="fa-solid fa-house fa-xl" style={{color: '#808080'}} ></i>
        <button className={styles.homeChild} onClick={scrollToSpecificID}  >Home</button>
      </div>
      <div className={styles.home}>
      <i class="fa-regular fa-user fa-xl" style={{color: '#808080'}}></i>
        <button className={styles.homeChild} onClick={scrollToSpecificID}>About</button>
      </div>
      <div className={styles.home}>
      <i class="fa-solid fa-code-branch fa-xl" style={{color: '#808080'}}></i>
        <button className={styles.homeChild} onClick={scrollToSpecificID}>Skills</button>
      </div>
      <div className={styles.home}>
        <i class="fa-regular fa-file fa-xl" style={{color: '#808080'}}></i>
        <button className={styles.homeChild} onClick={scrollToSpecificID}>Resume</button>
      </div>
      <div className={styles.home}>
        <i class="fa-solid fa-diagram-project fa-xl"  style={{color: '#808080'}}></i>
        <button className={styles.homeChild} onClick={scrollToSpecificID}>Projects</button>
      </div>
      <div className={styles.home}>
        <i class="fa-regular fa-envelope fa-xl"  style={{color: '#808080'}}></i>
        <button className={styles.homeChild}  onClick={scrollToSpecificID}>Contact</button>
      </div>

      

    </div>
  )
}

export default Sidebar