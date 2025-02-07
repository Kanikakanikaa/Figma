import React from 'react'
import './layout.scss'
import image from '../../assest/layout4.png'

export default function Layout4() {
  return (
    <div className='Container'>
      <h3>
      Celebrating Alumni Voices   </h3>
<div className='flex-container'>
    <div className='item'>
      <img src={image} alt=""/>
    </div>
      <div className='item'>
        <span>Kanika</span>
        <p>“Engaging in ASB’s NFT training greatly improved my skills. The expert trainers offered hands-on support, and the in-depth curriculum raised my technical expertise and salary potential.”</p>
      </div>
      <div className='item'>
        <span>Kinshuk Mehra</span>
<p>“ASB’s hands-on training gave me the skills and confidence to develop blockchain-based applications and effect meaningful industry change.”
  </p>    
    </div>
    </div>
    </div>
  )
}
