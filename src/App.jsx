import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Experience from './Components/Experience'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import './App.css'
import Contact from './Components/Contact'

const App = () => {

  return (
    <div className='bg-blueTheme text-white w-[100vw]' >

        <div  >
          <Navbar />
        </div>
        <div id='home' >
          <Home/>
        </div>
        <div id='experience' >
          <Experience />
        </div>
        <div id='education' >
          <Education/>
        </div>
        <div id='skills' >
          <Skills/>
        </div>
        <div id='projects' >
          <Projects/>
        </div>
        <div id='contact' >
          <Contact/>
        </div>
        
    </div> 
  )
}

export default App