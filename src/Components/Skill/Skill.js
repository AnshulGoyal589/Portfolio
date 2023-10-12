import React from 'react'
import styles from './Skill.module.css'


const Skill = () => {
  return (
    <div className={styles.main} id='Skills'>
      <h2 className={styles.head} >Skills</h2>
      <div className={styles.content} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil minus iste voluptas molestias ad excepturi accusamus, quas nisi aspernatur doloribus odit saepe necessitatibus cumque similique, quasi laudantium magnam fugiat aut.</div>
      <ul className={styles.listContainer} >
        <li className={styles.list2}  style={{position:'relative',bottom:'68px'}}>
          <strong style={{color:'#1d3557'}}><h5>PROGRAMMING LANGUAGES</h5></strong>
          <li>Javascript</li>
          <li>C++</li>
        </li>
        <li className={styles.list2} >
          <strong style={{color:'#1d3557'}}><h5>WEB DEVELOPMENT</h5></strong>
          <li>Frontend - HTML, CSS, React, Angular</li>
          <li>Backend - Node.js</li>
          <li>Databases - MongoDB</li>
          <li>Restful APIs</li>
        </li>
        <li className={styles.list2} style={{position:'relative',bottom:'68px'}} >
          <strong style={{color:'#1d3557'}}><h5>FRAMEWORK AND LIBRARIES</h5></strong>
          <li>Express.js</li>
          <li>jQuery</li>
          <li>Tailwind</li>
          <li>Bootstrap</li>
        </li>
        <li className={styles.list2}  style={{position:'relative',bottom:'140px'}}>
          <strong style={{color:'#1d3557'}}><h5>COMPETITIVE PROGRAMMING</h5></strong>
          <li>Strong Problem Solving Abilities</li>
          <li></li>
        </li>
        <li className={styles.list2}  style={{position:'relative',bottom:'140px'}}>
          <strong style={{color:'#1d3557'}}><h5>VERSION CONTROL</h5></strong>
          <li>GIT</li>
          <li>GITHUB</li>
        </li>
        <li className={styles.list2} style={{position:'relative',bottom:'165px'}} >
          <strong><h5 style={{color:'#1d3557'}} >OPEN SOURCE</h5></strong>
          <li>Code Review and Contribution</li>
        </li>
      </ul>
    </div>
  )
}

export default Skill