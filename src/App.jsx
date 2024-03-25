import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Experience from './Components/Experience'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import './App.css'

const App = () => {

  const [showHome, setShowHome] = useState(true);
  const [showExperience, setShowExperience] = useState(true);
  const [showEducation, setShowEducation] = useState(true);
  const [showSkills, setShowSkills] = useState(true);
  const [showProjects, setShowProjects] = useState(true);

  const choose = (e) => {
    if(e === 'HOME') {
      setShowHome(true);
      setShowExperience(false);
      setShowEducation(false);
      setShowSkills(false);
      setShowProjects(false);
    }
    if(e === 'EXPERIENCE') {
      setShowHome(false);
      setShowExperience(true);
      setShowEducation(false);
      setShowSkills(false);
      setShowProjects(false);
    }
    if(e === 'EDUCATION') {
      setShowHome(false);
      setShowExperience(false);
      setShowEducation(true);
      setShowSkills(false);
      setShowProjects(false);
    }
    if(e === 'SKILLS') {
      setShowHome(false);
      setShowExperience(false);
      setShowEducation(false);
      setShowSkills(true);
      setShowProjects(false);
    }
    if(e === 'PROJECTS') {
      setShowHome(false);
      setShowExperience(false);
      setShowEducation(false);
      setShowSkills(false);
      setShowProjects(true);
    }
  }


  return (
    <div className='bg-blueTheme text-white' >

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
        
    </div> 
  )
}

export default App