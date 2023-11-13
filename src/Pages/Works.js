import React from 'react'
import './Works.css'
import petCare from '../Assets/petCare.PNG'
import foodOrder from '../Assets/foodOrder.PNG'

export default function Works() {

  return (
    <div className='works'>
        <h1>My projects</h1>
        <div className='projects'>
            <div className='container'>
        <div className='project1'>
            <div className='projectLeft'>
            <img src={petCare} alt="petCare" className='petCare'/>
            </div>
            <div className='projectRight'>
                <span className='repo'><u>Access GitHub repository</u></span><br/><br/>
                <span className='text'>‘petCare’ is a mobile app which was created by using "Android Studio". This project provides a simple solution to an everyday problem. This can make a connection between pet owner and doctor. It offers everything one might need to better care for pets including reminders for all care tasks, medical history and data sharing. In Firebase, Firestore database is used for storing data.</span>
            </div>
            </div>
            </div>
        </div>
        <div className='container'>
        <div className='project2'>
            <div className='projectLeft'>
            <img src={foodOrder} alt="foodOrder" className='foodOrder'/>
            </div>
            <div className='projectRight'>
                <span className='repo'><u>Access GitHub repository</u></span><br/><br/>
                <span className='text'>An Angular based food app has been developed and it offers a seamless and visually appealing platform that prioritizes user friendliness.</span>
            </div>
            </div>
            </div>
        </div>
  )
}

