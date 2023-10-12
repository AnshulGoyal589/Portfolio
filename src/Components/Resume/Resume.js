import React from 'react'
import styles from './Resume.module.css'
import Education from '../Education/Education'
import Achievement from '../Achievement/Achievement'
import Experience from '../Experience/Experience'


const Resume = () => {
  return (
    <div className={styles.main} id='Resume'>
      <h2 className={styles.head} >Resume</h2>
      <div className={styles.content} ></div>
      <Education/>
      <Experience/>
      <Achievement/>

    </div>
  )
}

export default Resume