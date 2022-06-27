import React, {useState} from 'react';
import './Navbar.css'
import {FaBars, FaTimes} from "react-icons/fa"
import logo from './logo.png'

import { Link } from 'react-scroll'

function Navbar(props) {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <nav className="navbar">
      <div className="logo-div">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div onClick={handleClick} className="hamburger">
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>
      <ul className={!nav ? "hide" : "mobile-links"}>
        <li><Link to="home" offset={0} onClick={handleClick} smooth={true} duration={500}>
          Home
        </Link></li>
        <li><Link to="about" onClick={handleClick} smooth={true} duration={500}>
          About
        </Link></li>
        <li><Link to="skills" onClick={handleClick} smooth={true} duration={500}>
          Skills
        </Link></li>
        <li><Link to="projects" onClick={handleClick} smooth={true} duration={500}>
          Project
        </Link></li>
        <li><Link to="contact" onClick={handleClick} smooth={true} duration={500}>
          Contact
        </Link></li>
      </ul>
      
        <ul className='desktop-links'>
          <li><Link to="home" smooth={true} duration={500}>
          Home
        </Link></li>
          <li><Link to="about" smooth={true} duration={500}>
          About
        </Link></li>
          <li><Link to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
          <li><Link to="projects" smooth={true} duration={500}>
          Project
        </Link></li>
          <li><Link to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
        </ul>
    </nav>
  );
}

export default Navbar;