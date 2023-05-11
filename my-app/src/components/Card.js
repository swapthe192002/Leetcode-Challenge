import React from 'react'
import './Card.css';

function Card({title, body, chapters, items}) {
  return (
    <div className='card-container'>
      <div className='card-content'>
       <div className='card-title'>
         <h3>{title}</h3>
       </div>
       <div className='card-body'>
         <h1>{body}</h1>
       </div>
      </div>
      <div className='timestamp'>
        <div className='chapters'>
        <p>{chapters}</p>
        <h3>Chapters</h3>
        </div>
        <div className='items'>
        <p>{items}</p>
        <h3>Items</h3>
        </div>
      </div>
    </div>
  )
}

export default Card