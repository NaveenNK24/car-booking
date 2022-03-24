import React from 'react'
import './Topic.css'

function Topic(props) {
  return (
    <div className='topic'>
        <span >{props.name}</span>        
    </div>
  )
}

export default Topic