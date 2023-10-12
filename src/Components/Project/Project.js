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
          <img className={styles.image} src="https://media.istockphoto.com/id/1051616786/photo/digital-marketing-businessman-working-with-laptop-computer-tablet-and-smart-phone-modern.jpg?s=2048x2048&w=is&k=20&c=ojNzb0hyOeQLP-n9C1o7MPoI1sKk4cLRbiHtpLRhbQ8=" alt="Ecommerce Logo" />
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
          <img className={styles.image} src="https://media.istockphoto.com/id/1051616786/photo/digital-marketing-businessman-working-with-laptop-computer-tablet-and-smart-phone-modern.jpg?s=2048x2048&w=is&k=20&c=ojNzb0hyOeQLP-n9C1o7MPoI1sKk4cLRbiHtpLRhbQ8=" alt="Ecommerce Logo" />
          <ul>
            <li>Developed a weather app providing real-time weather updates and forecasts</li>
            <li>Integrated geolocation functionality to tailor weather information based on user's location</li>
          </ul>
          
        </div>
        </div>
        <div className={styles.listChild} >
          <Link to="https://github.com/AnshulGoyal589/TalkSync"><strong>Film Fusion</strong></Link>
        <div className={styles.container}>
          <img className={styles.image} src="https://media.istockphoto.com/id/1051616786/photo/digital-marketing-businessman-working-with-laptop-computer-tablet-and-smart-phone-modern.jpg?s=2048x2048&w=is&k=20&c=ojNzb0hyOeQLP-n9C1o7MPoI1sKk4cLRbiHtpLRhbQ8=" alt="Ecommerce Logo" />
          <ul>
            <li>Created Film Fusion app for seamless video editing and production</li>
            <li>Integrated a user-friendly interface and comprehensive editing tools for enhanced creativity</li>
          </ul>
          
        </div>
        </div>
        <div className={styles.listChild} >
          <Link to="https://github.com/AnshulGoyal589/FilmFusion"><strong>CoffeeBrewHub</strong></Link>
        <div className={styles.container}>
          <img className={styles.image} src="https://media.istockphoto.com/id/1051616786/photo/digital-marketing-businessman-working-with-laptop-computer-tablet-and-smart-phone-modern.jpg?s=2048x2048&w=is&k=20&c=ojNzb0hyOeQLP-n9C1o7MPoI1sKk4cLRbiHtpLRhbQ8=" alt="Ecommerce Logo" />
          <ul>
            <li>Developed Coffee Brew Hub, an app to discover and explore coffee brewing techniques</li>
            <li>Integrated a user-friendly interface for easy navigation and a delightful user experience</li>
          </ul>
          
        </div>
        </div>
        <div className={styles.listChild} >
          <Link to="https://github.com/AnshulGoyal589/CoffeeBrewHub"><strong>Snake Game</strong></Link>
        <div className={styles.container}>
          <img className={styles.image} src="https://media.istockphoto.com/id/1051616786/photo/digital-marketing-businessman-working-with-laptop-computer-tablet-and-smart-phone-modern.jpg?s=2048x2048&w=is&k=20&c=ojNzb0hyOeQLP-n9C1o7MPoI1sKk4cLRbiHtpLRhbQ8=" alt="Ecommerce Logo" />
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