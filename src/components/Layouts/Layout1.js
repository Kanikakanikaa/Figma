import React from 'react'
import  image from '../../assest/Rectangle 3469110.png'
import image1 from '../../assest/Rectangle 3469111.png'

import './Layout1.scss'

export default function Layout1() {

 
  return (
    <div className='container'>
        <h2 className='heading'>
        Web3 and  Marketing Agency —
        <span className='highlight'> Precision Marketing </span> for Maximum Reach.        </h2>
        <div className='content'>
            <div  className='textSection'>
            <p className='text'>
            We are Web3 and digital marketing powerhouse—strategists, communication designers, copywriters, social media specialists, search discovery experts, and community builders—creating ripples of jaw-dropping virality for ambitious next-gen clients. Our secret sauce? Pure, unapologetic irrationality.
            </p>
            <button className='button'>Get in Touch</button>
            </div>
            <div className='imageSection'>
                <img  className ="img1"src={image} alt="" />
                <img  className ="img2" src={image1} alt="" />

            </div>
        </div>
    </div>
  )
}
