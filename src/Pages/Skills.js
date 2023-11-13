import React from 'react'
import './Skills.css'
import HTML from '../Assets/html.png'
import CSS from '../Assets/css.png'
import JS from '../Assets/js.PNG'
import PYTHON from '../Assets/python.png'
import PHP from '../Assets/php.png'
import JAVA from '../Assets/java.png'
import SQL from '../Assets/sql.png'
import REACT from '../Assets/react.png'
import ANGULAR from '../Assets/angular.png'
import ANDROID from '../Assets/android.png'

export default function Skills() {
  return (
    <div className='skillsContainer'>
      <h1>My Skills </h1>
      <div className="images">
        <div className='upIcon'>
        <img src={HTML} alt="HTML" className='icon'/>
        <img src={CSS} alt="CSS" className='icon'/>
        <img src={JS} alt="JS" className='icon'/>
        <img src={PYTHON} alt="PYTHON" className='icon'/>
        <img src={ANGULAR} alt="ANGULAR" className='angular'/>
        </div>
        <div className='downIcon'>
        <img src={PHP} alt="PHP" className='icon'/>
        <img src={JAVA} alt="JAVA" className='icon'/>
        <img src={SQL} alt="SQL" className='icon'/>
        <img src={REACT} alt="REACT" className='icon'/>
        <img src={ANDROID} alt="ANDROID" className='icon'/>
        </div>
      </div>
    </div>
  )
}
