import React, { useState } from 'react';
import './navbar.css';
import logo from './logo.jpeg'
import { FaBars } from "react-icons/fa";

const Navbar = () => {

  let [burger, setBurger] = useState(false);

  const burgerHandle = () => {
    setBurger(!burger);
    if (burger) {
      document.getElementById('navb').style.display = 'block';
    } else {
      document.getElementById('navb').style.display = 'none';
    }
  }


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); 
    }
  };
  return (
    <div id='mainPP' className='fixed w-[100vw] top-0 z-50 text-xl'>
      <div id='mainn' className='navbar-container backdrop-blur-xl backdrop-blueTheme flex justify-between items-center pl-16'>
        <div id='namee' className='flex gap-2 justify-center items-center' >
            <img src={logo} className='w-[5vw] rounded-full border-8 border-[#2e3337]' alt='' />
            <p className='font-bold flex gap-2' ><span><span className='text-red' >ANS</span>HUL</span> <span><span className='text-red' >GO</span>YAL</span></p>
        </div>
        <ul id='onee' className='flex justify-end items-center gap-[3.5vw] py-8 px-[13vw] text-base'  >
          <li onClick={() => scrollToSection('home')} role="button">HOME</li>
          <li onClick={() => scrollToSection('experience')} role="button">EXPERIENCE</li>
          <li onClick={() => scrollToSection('education')} role="button">EDUCATION</li>
          <li onClick={() => scrollToSection('skills')} role="button">SKILLS</li>
          <li onClick={() => scrollToSection('projects')} role="button">PROJECTS</li>
          <li onClick={() => scrollToSection('contact')} role="button">CONTACT</li>
        </ul>
        <div id='twoo' className='hidden'  >
            <FaBars onClick={burgerHandle}  />

        </div>
        <div id="navb"  onClick={burgerHandle}   className='drop-shadow-4xl rounded-xl hidden' >
              <ul className='flex flex-col justify-start items-start  text-base text-white bg-blueTheme rounded-xl '  >
                <li onClick={() => scrollToSection('home') } role="button"><span className='text-white' >HO</span>ME</li>
                <li onClick={() => scrollToSection('experience')} role="button"><span className='text-white' >EXPE</span>RIENCE</li>
                <li onClick={() => scrollToSection('education')} role="button"><span className='text-white' >EDUC</span>ATION</li>
                <li onClick={() => scrollToSection('skills')} role="button"><span className='text-white' >SKI</span>LLS</li>
                <li onClick={() => scrollToSection('projects')} role="button"><span className='text-white' >PROJ</span>ECTS</li>
                <li onClick={() => scrollToSection('contact')} role="button"><span className='text-white' >CON</span>TACT</li>
              </ul>
          </div> 

      </div>
    </div>
  );
};

export default Navbar;
