import React from 'react'
import styles from './Skill.module.css'


const Skill = () => {
  return (
    <div className={styles.main} id='Skills'>
      <h2 className={styles.head} >Skills</h2>
      <div className={styles.content} >Experienced full-stack web developer adept in TypeScript, Next.js, Docker, and GraphQL, with a proficiency in WordPress. Additionally, skilled in competitive programming, bringing a strong problem-solving mindset to code challenges.</div>
      <div className={styles.listContainer} >
          <div className={styles.container9} >

              <div className={styles.list2}  style={{position:'relative',bottom:'68px'}}>
              <strong style={{color:'#1d3557'}}><h4 style={{marginLeft:'10px'}} >FRONTEND</h4></strong>
              <div style={{display:'flex',flexWrap:'wrap'}}> 
                <span style={{marginLeft:'10px',marginRight:'10px'}} >NEXT.js</span>  ||
                <span style={{marginLeft:'10px',marginRight:'10px'}} >tRPC</span>  ||
                <span style={{marginLeft:'10px',marginRight:'10px'}} >Typed.js</span> 
                <span style={{marginLeft:'10px',marginRight:'10px'}} >State management with Recoil</span> 
                <span style={{marginLeft:'10px',marginRight:'10px'}} >HTML</span> ||
                <span style={{marginLeft:'10px',marginRight:'10px'}} >CSS</span> ||
                <span style={{marginLeft:'10px',marginRight:'10px'}} >Bootstrap</span> 
                <span style={{marginLeft:'10px',marginRight:'10px'}} >Tailwind</span> ||
                <span style={{marginLeft:'10px',marginRight:'10px'}} >MUI</span> 
              </div>
              </div>
              <div className={styles.list2}  style={{position:'relative',bottom:'68px'}}>
              <strong style={{color:'#1d3557'}}><h4 style={{marginLeft:'10px'}} >BACKEND</h4></strong>
              <div style={{display:'flex',flexWrap:'wrap'}}> 
                <span style={{marginLeft:'5px',marginRight:'5px'}} >NodeJS</span> ||
                <span style={{marginLeft:'5px',marginRight:'5px'}} >tRPC</span> ||
                <span style={{marginLeft:'5px',marginRight:'5px'}} >Express</span> ||
                <span style={{marginLeft:'5px',marginRight:'5px'}} >Socket.io</span> 
                <span style={{marginLeft:'5px',marginRight:'5px'}} >Containerising with Docker</span> ||
                <span style={{marginLeft:'5px',marginRight:'5px'}} >Middlewares & Authentication protocols</span> 
              </div>
              </div>


          </div> 

          <div className={styles.container9} >

            <div className={styles.list2}  style={{position:'relative',bottom:'68px'}}>
              <strong style={{color:'#1d3557'}}><h4 style={{marginLeft:'10px'}} >DATABASES</h4></strong>
              <div style={{display:'flex',flexDirection:'column',flexWrap:'wrap'}}> 
                <span style={{marginBottom:'10px',marginLeft:'10px'}} >MongoDB
                    <span style={{marginLeft:'40px'}} >SQL Lite</span>
                </span>  
                <span style={{marginBottom:'10px',marginLeft:'10px'}} >PostgreSQL</span>  
                <span style={{marginBottom:'10px',marginLeft:'10px'}} >PrismaORM</span> 
              </div>
            </div>
            <div className={styles.list2}  style={{position:'relative',bottom:'68px'}}>
              <strong><h4 style={{color:'#1d3557',marginLeft:'20px'}} >Competitive Programming</h4></strong>
                <div style={{marginLeft:'20px'}} >DSA C++ || CodeForces</div>
                <div style={{marginLeft:'20px'}} >200+ Leetcode Problems</div>
                <div style={{marginLeft:'20px'}} >COdeChef || HackerRank</div>

            </div>
            </div>
        
          <div className={styles.container9} >
          <div className={styles.list2}  style={{position:'relative',bottom:'68px'}}>
              <strong style={{color:'#1d3557'}}><h4 style={{marginLeft:'10px'}} >APIs</h4></strong>
              <div style={{display:'flex',flexDirection:'column',flexWrap:'wrap'}}> 
                <span style={{marginBottom:'10px',marginLeft:'10px'}} >GraphQL
                    <span style={{marginLeft:'75px'}} >tRPC</span>
                </span>  
                <span style={{marginBottom:'10px',marginLeft:'10px'}} >RESTful APIs
                  <span style={{marginLeft:'52px'}} >WebSocket APIs</span>
                </span>  
                <span style={{marginBottom:'10px',marginLeft:'10px'}} >Webhooks</span> 
              </div>
            </div>

              <div className={styles.list2} style={{position:'relative',bottom:'165px'}} >
                <strong><h4 style={{color:'#1d3557',marginLeft:'20px'}} >OPEN SOURCE</h4></strong>
                <div style={{marginLeft:'20px',marginBottom:'7px'}} >Code Review and Contribution</div>
                <div style={{marginLeft:'20px',marginBottom:'7px'}} >GIT</div>
                <div style={{marginLeft:'20px',marginBottom:'7px'}} >GITHUB</div>
              </div>

          </div>
      </div>
      </div>
  )
}

export default Skill