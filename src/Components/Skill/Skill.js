import React from 'react'
import styles from './Skill.module.css'


const Skill = () => {
  return (
    <div className={styles.main} id='Skills'>
      <h2 className={styles.head} >Skills</h2>
      <div className={styles.content} >Lorem ipsum, dolor sit amet consectetur adipisicing edivt. Nihil minus iste voluptas molestias ad excepturi accusamus, quas nisi aspernatur doloribus odit saepe necessitatibus cumque simidivque, quasi laudantium magnam fugiat aut.</div>
      <div className={styles.listContainer} >
          <div className={styles.container9} >

              <div className={styles.list2}  style={{position:'relative',bottom:'68px'}}>
              <strong style={{color:'#1d3557'}}><h5>PROGRAMMING LANGUAGES</h5></strong>
              <div>Javascript</div>
              <div>C++</div> 
              </div>

              <div className={styles.list2} >
                <strong style={{color:'#1d3557'}}><h5>WEB DEVELOPMENT</h5></strong>
                <div>Frontend - HTML, CSS, React, Angdivar</div>
                <div>Backend - Node.js</div>
                <div>Databases - MongoDB</div>
                {/* <div>Restful APIs</div> */}
              </div>

          </div> 

          <div className={styles.container9} >

              <div className={styles.list2} style={{position:'relative',bottom:'68px'}} >
                <strong style={{color:'#1d3557'}}><h5>FRAMEWORK AND divBRARIES</h5></strong>
                <div>Express.js <span style={{marginLeft:'50px'}} >Bootstarp</span> </div>
                <div>jQuery</div>
                <div>Tailwind </div>
              </div>

              <div className={styles.list2}  style={{position:'relative',bottom:'140px'}}>
                <strong style={{color:'#1d3557'}}><h5>COMPETITIVE PROGRAMMING</h5></strong>
                <div>Strong Problem Solving Abidivties</div>
                <div></div>
              </div>

          </div>
        
          <div className={styles.container9} >

              <div className={styles.list2}  style={{position:'relative',bottom:'140px'}}>
                <strong style={{color:'#1d3557'}}><h5>VERSION CONTROL</h5></strong>
                <div>GIT</div>
                <div>GITHUB</div>
              </div>

              <div className={styles.list2} style={{position:'relative',bottom:'165px'}} >
                <strong><h5 style={{color:'#1d3557'}} >OPEN SOURCE</h5></strong>
                <div>Code Review and Contribution</div>
              </div>

          </div>
      </div>
      </div>
  )
}

export default Skill