import React from 'react'
import './About.css'


// loading-name css is in the about css

const About = () => {
  return (
    <div name='about' className='about'>
        <div className='about-container'>
            <h2 className='loading-name'>
              <span style={{"--i": 1}} > A</span>
              <span style={{"--i": 2}} >b</span>
              <span style={{"--i": 3}} >o</span>
              <span style={{"--i": 4}} >u</span>
              <span style={{"--i": 5}} >t</span>
            </h2>
            <div className='about-main'>
                <p className='about-intro'>Hi. I'm Saheed, it's nice to have you here. Feel free to scroll around!</p>
                <p className='about-dets'>I'm passionate about building and learning about web tools and applications. Seeing designs come to life is one of the reasons I enjoy doing this.</p>
            </div>
        </div>
    </div>
  )
}

export default About