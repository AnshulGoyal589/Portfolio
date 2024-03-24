import React from 'react';
import './navbar.css';
import logo from './logo.jpeg'

const Navbar = () => {
  return (
    <div className='fixed w-full top-0 z-50'>
      <div className='navbar-container backdrop-blur-xl backdrop-blueTheme flex justify-between items-center pl-16'>
        <div className='flex gap-5 justify-center items-center' >
            <img src={logo} className='w-20 rounded-full border-8 border-[#2e3337]' alt='' />
            <p className='font-bold' ><span className='text-red' >ANS</span>HUL <span className='text-red' >GO</span>YAL</p>
        </div>
        <ul className='flex justify-end items-center gap-16 py-8 px-56 text-sm' >
          <li>HOME</li>
          <li>EXPERIENCE</li>
          <li>EDUCATION</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
