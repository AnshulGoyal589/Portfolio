import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skill from './Components/Skill/Skill'
import Resume from './Components/Resume/Resume'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'

const App = () => {
  return ( 
    <div>
 
      <Sidebar/>
      <Home/>
      <About/>
      <Skill/>
      <Resume/>
      <Project/>
      <Contact/>

    </div>
  )
}

export default App