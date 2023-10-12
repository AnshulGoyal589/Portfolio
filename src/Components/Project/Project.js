import React from 'react'
import styles from './Project.module.css'
import { Link } from 'react-router-dom'


const Project = () => {
  return (
    <div className={styles.main} id='Projects'>

      <h2 className={styles.head} >Projects</h2>
      <div className={styles.content} ></div> 
      <div className={styles.list}>

        <div className={styles.listChild} >
          <Link to="https://github.com/AnshulGoyal589/EcommerceWebsite"><strong>ECommerce Website</strong></Link>

          <div className={styles.container}>
          <img className={styles.image} src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Ecommerce Logo" />
          <ul >
            <li>Implemented secure authentication mechanisms for both buyers and sellers</li>
            <li>Designed and implemented an intuitive shopping cart system for seamless 
              user experience, ensuring smooth navigation and order management for buyers and sellers
            </li>
          </ul>
          </div>
          <img src="" alt="" />

        </div>
        <div className={styles.listChild} >
          <Link to="https://github.com/AnshulGoyal589/WeatherlyApp"><strong>Weatherly App</strong></Link>
        <div className={styles.container}>
          <img className={styles.image} src="https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYXRoZXIlMjBhcHB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Ecommerce Logo" />
          <ul>
            <li>Developed a weather app providing real-time weather updates and forecasts</li>
            <li>Integrated geolocation functionality to tailor weather information based on user's location</li>
          </ul>
          
        </div>
        </div>
        <div className={styles.listChild} >
          <Link to="https://github.com/AnshulGoyal589/TalkSync"><strong>Film Fusion</strong></Link>
        <div className={styles.container}>
          <img className={styles.image} src="https://images.unsplash.com/photo-1532800181046-044ce9bfd577?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGZpbG18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Ecommerce Logo" />
          <ul>
            <li>Created Film Fusion app for seamless video editing and production</li>
            <li>Integrated a user-friendly interface and comprehensive editing tools for enhanced creativity</li>
          </ul>
          
        </div>
        </div>
        <div className={styles.listChild} >
          <Link to="https://github.com/AnshulGoyal589/FilmFusion"><strong>CoffeeBrewHub</strong></Link>
        <div className={styles.container}>
          <img className={styles.image} src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Ecommerce Logo" />
          <ul>
            <li>Developed Coffee Brew Hub, an app to discover and explore coffee brewing techniques</li>
            <li>Integrated a user-friendly interface for easy navigation and a delightful user experience</li>
          </ul>
          
        </div>
        </div>
        <div className={styles.listChild} >
          <Link to="https://github.com/AnshulGoyal589/CoffeeBrewHub"><strong>Snake Game</strong></Link>
        <div className={styles.container}>
          <img className={styles.image} src="https://images.unsplash.com/photo-1633081528930-91c8cc07f3d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25ha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Ecommerce Logo" />
          <ul>
            <li>Built a classic Snake game utilizing the Canvas API for rendering graphics</li>
            <li>Programmed interactive controls and collision detection for an engaging gaming experience</li>
          </ul>
          
        </div>
        </div>

      </div>

    </div>
  )
}

export default Project