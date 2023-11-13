import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className='about'>
      <h1>About me </h1>
      <div className="description">
      <h2>Hello! I'm Kithmini Madanayake, a passionate web developer with expertise in HTML, CSS, and JavaScript. I take pride in crafting captivating and user-friendly websites. Collaboration fuels my creativity, and I thrive in team environments where innovation thrives. 
      <br/><br/>I love the perfect blend of creativity and coding. With a strong passion for both design and development, I strive to create websites and mobile apps. As a quick learner, I continuously expand my knowledge and skills to stay up-to-date with the latest industry trends. Every project is an opportunity for me to showcase my creativity and attention to detail.</h2>
      </div>
      <div className= "details">
        <div className = "leftSide">
        <span>First Name : Kithmini </span>
        <span>Birthday :29/01/1999 </span>
        <span>Address : Horawala, Welipenna</span>
        <span>Languages : English, Sinhala, Tamil</span>
      </div>
      <div className= "rightSide">
      <span>Last Name : Madanayake</span>
      <span>Study : University of Colombo</span>
      <span>Degree : BSc Hons in Electronics & IT</span>
      <span>Email : kithminimadanayake@gmail.com</span>
      </div>
      </div>
    </div>
  )
}
