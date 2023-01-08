import React from 'react'
import './Contact.css'


// loading-name css is in the about css

const Contact = () => {
  return (
    <div name="contact" className='contact'>
        <form className='form' action="" method="POST">
            <div className='form-dets'>
            <h2 className='loading-name'>
            <span style={{ "--i": 1 }}>C</span>
            <span style={{ "--i": 2 }}>o</span>
            <span style={{ "--i": 3 }}>n</span>
            <span style={{ "--i": 4 }}>t</span>
            <span style={{ "--i": 5 }}>a</span>
            <span style={{ "--i": 6 }}>c</span>
            <span style={{ "--i": 7 }}>t</span>
          </h2>
                <p>Submit the form below or shoot me an email - shittusaheed01@gmail.com</p>
            </div>
            <input type="text" name="name" placeholder='Name' id="" />
            <input type="email" name="email" placeholder='Email' id="" />
            <textarea placeholder='Message' name="message" id="message" cols="30" rows="10"></textarea>
            <button disabled type="submit">Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact