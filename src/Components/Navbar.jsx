import React from 'react';
import './navbar.css';
import logo from './logo.jpeg'

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='fixed w-[100vw] top-0 z-50 text-xl'>
      <div className='navbar-container backdrop-blur-xl backdrop-blueTheme flex justify-between items-center pl-16'>
        <div className='flex gap-2 justify-center items-center' >
            <img src={logo} className='w-[5vw] rounded-full border-8 border-[#2e3337]' alt='' />
            <p className='font-bold flex gap-2' ><span><span className='text-red' >ANS</span>HUL</span> <span><span className='text-red' >GO</span>YAL</span></p>
        </div>
        <ul className='flex justify-end items-center gap-[3.5vw] py-8 px-[13vw] text-base'  >
          <li onClick={() => scrollToSection('home')} role="button">HOME</li>
          {/* <li onClick={() => scrollToSection('experience')} role="button">EXPERIENCE</li>
          <li onClick={() => scrollToSection('education')} role="button">EDUCATION</li>
          <li onClick={() => scrollToSection('skills')} role="button">SKILLS</li>
          <li onClick={() => scrollToSection('projects')} role="button">PROJECTS</li>
          <li onClick={() => scrollToSection('contact')} role="button">CONTACT</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
