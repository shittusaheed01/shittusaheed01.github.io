import React,{useState} from 'react'
import './Home.css'
import {HiArrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  const [hov, setHov] = useState(false)
  const handleHover = () => setHov(!hov)
  const handleHovOut = () => setHov(!hov)
  return (
    <div name="home" className="home">
      <div className='home-cont'>
      <p>Hi, my Name is</p>
      <h1 className='waviy'> 
      <span style={{"--i": 1}} >S</span>
      <span style={{"--i": 2}}>a</span>
      <span style={{"--i": 3}}>h</span>
      <span style={{"--i": 4}}>e</span>
      <span style={{"--i": 5}}>e</span>
      <span style={{"--i": 6}}>d</span>
      <span style={{margin:"0px 10px"}}>  </span>
      <span style={{"--i": 8}}>S</span>
      <span style={{"--i": 9}}>h</span>
      <span style={{"--i": 10}}>i</span>
      <span style={{"--i": 11}}>t</span>
      <span style={{"--i": 12}}>t</span>
      <span style={{"--i": 13}}>u</span>
      <span style={{"--i": 14}}>,</span></h1>
      <h2>I am a Software Developer</h2>
      <p>
      developer skilled at building both server-side and client-side applications.
      </p>
      <div className='home-btn'>
      <Link to="projects" smooth={true} duration={500}>
      <button onMouseEnter={handleHover} onMouseLeave = {handleHovOut} >View Work
          <HiArrowRight className={!hov ? "home-arrow" : "home-arrow-hover"} /> 
          </button>
        </Link>
        
      </div>
      </div>
      
    </div>
  );
}

export default Home