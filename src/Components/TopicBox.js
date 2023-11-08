import React from 'react'
import './TopicBox.css'

export default function TopicBox(props) {
    return (
      <div>
        <div className='topicBox'>
          <span className='text'>The food is {props.food} and the price is {props.price}</span>
        </div>
      </div>
    )
  
}
