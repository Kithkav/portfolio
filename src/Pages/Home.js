import React from 'react'
import './Home.css'
import myImage from '../Assets/MyImage.jpeg';

export default function Home() {

  return (
    <div className='home'>
      <div className='content'>
      <div className='textContent'>
      <h2>Welcome to my site</h2><br/>
      <h1>KITHMINI MADANAYAKE</h1>
      <h1 className='post'>UI/UX Designer & Web Developer</h1><br/><br/>
      </div>

      <img src={myImage} alt="My Image" className='image'/>
    </div>
    </div>
  )
}

