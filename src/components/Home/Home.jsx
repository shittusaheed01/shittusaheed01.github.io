import React,{useState} from 'react'
import './Home.css'
import {HiArrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
// import TypeAnimation from 'react-type-animation';

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
      <h2>I am a Frontend Developer</h2>
      <p>
        
        I'm A Frontend developer, with a keen eye for the littlest detail in designs. I'm focused on building responsive frontend applications because I enjoy seeing designs come to life
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