import React from 'react';
import './Layout5.scss';
import img1 from "../../assest/antier.png"
import img5 from "../../assest/ancrypto.png"
import img2 from "../../assest/intgo.png"
import img3 from "../../assest/neevlabs.png"
import img4 from "../../assest/abstrax.png"



export default function Layout5() {
    const images=[{
        img:img1
    },
    {
        img:img2
    },
    {
        img:img3
    },
    {
        img:img4
    },{
        img:img5
    }]
  return (

    <div className='layout5'>
        <h2>Operationalize your commitments by connecting and creating with global expertise</h2>
        <div className='outer'>
{images.map((e)=>(
   
    <img src={e?.img} alt="" />
    
))}
</div>
    </div>
  )
}
