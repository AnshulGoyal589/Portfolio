import React from 'react'
import styles from './Achievement.module.css'


const Achievement = () => {
  return (
    <div className={styles.main} >
        <h4 style={{fontWeight:'1200'}}>ACHIEVEMENT</h4>
        <li>2 STAR @CodeChef</li>
        <li>5 STAR @HackerRank</li>
        <li>100+ LeetCode Questions</li>
    </div>
  )
}

export default Achievement