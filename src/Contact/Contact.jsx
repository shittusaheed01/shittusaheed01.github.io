import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div name="contact" className='contact'>
        <form className='form' action="" method="POST">
            <div className='form-dets'>
                <h2>Contact</h2>
                <p>Submit the form below or shoot me an email - shittusaheed01@gmail.com</p>
            </div>
            <input type="text" name="name" placeholder='Name' id="" />
            <input type="email" name="email" placeholder='Email' id="" />
            <textarea placeholder='Message' name="message" id="message" cols="30" rows="10"></textarea>
            <button type="submit">Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact