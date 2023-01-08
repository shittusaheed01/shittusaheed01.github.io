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
                <p className='about-dets'> I am efficient at writing code that powers the application, integrating the application with other systems, writing unit tests and integration tests to ensure the stability and correctness of the API, and ensuring that the application is scalable and maintainable. I have a strong foundation in JavaScript and databases and have experience using a range of technologies and frameworks, including Node.js, Express.js, MySQL, MongoDB, Git, and React.js.</p>
            </div>
        </div>
    </div>
  )
}

export default About