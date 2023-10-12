import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.main} id='About'>

      <h2 className={styles.head} >About</h2>
      <div className={styles.content} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil minus iste voluptas molestias ad excepturi accusamus, quas nisi aspernatur doloribus odit saepe necessitatibus cumque similique, quasi laudantium magnam fugiat aut.</div>
      <div className={styles.container} >
        <img src="https://images.unsplash.com/photo-1696537768579-705244eb77c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className={styles.image} />
        <div className={styles.main2} >
          <h2 className={styles.heading2}>Full Stack Web Developer</h2>
          <div >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor molestiae veniam recusandae dolore sed laudantium adipisci nesciunt, numquam </div>
          <ul className={styles.list} >
            <li className={styles.data} ><strong>DEGREE:</strong> Undergraduate BTech </li>
            <li className={styles.data} ><strong>PHONE:</strong>+91 81680-79094 </li>
            <li className={styles.data} ><strong>EMAIL:</strong> anshulgoyal589@gmail.com </li>
            <li className={styles.data} ><strong>CITY:</strong> New Delhi, India</li>
            <li className={styles.data} ><strong>FREELANCE:</strong> Available </li>
            <li className={styles.data} ><strong>DOB:</strong> 17/08/2004 </li>
          </ul>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum doloribus praesentium, repellat fugit nulla beatae sint, aut dolore necessitatibus eligendi minus id quam doloremque obcaecati modi deleniti consectetur recusandae saepe!</div>
        </div>
      </div>

    </div>
  )
}

export default About