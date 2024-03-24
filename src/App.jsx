import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Experience from './Components/Experience'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Projects from './Components/Projects'

const App = () => {
  return (
    <div className='bg-blueTheme text-white' >
        <Navbar/>
        <Home/>
        <Experience/>
        <Education/>
        <Skills/>
        <Projects/>
    </div>
  )
}

export default App