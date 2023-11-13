import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className='contact'>
      <h1>Contact Me</h1>
      <div className='details'>
        <span className='disc'>Mobile : +94768576084</span><br/>
        <span className='disc'><u>Email : kithminimadanayake@gmail.com</u></span><br/>
        <span className='disc'>Address : 'Arsiri', Horawala, Welipenna</span><br/>
        <div className='input'>
          <div className='box'>
        <span className='para'>I am always open to discuss your new product</span>
        <span>Name</span>
        <input type="text" className='field'/>
        <span>Email</span>
        <input type='text' className='field'/>
        <span>Message</span>
        <textarea id="message" name="message" rows="4" cols="50" className='message'/>
        <button className='button'>Submit</button>
        </div>
        </div>
      </div>
      
    </div>
  )
}
