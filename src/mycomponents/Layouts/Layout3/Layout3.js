import React from 'react'
import './layout3.scss';
import img1 from "../../../assest/layout3.1.png"
import img2 from "../../../assest/layout3.2.png"
import img3 from "../../../assest/layout3.3.png"
import img4 from "../../../assest/layout3.4.png"


export default function Layout3() {
    const table=[{
        img: img1,
        title:"86M+",
        content:"Learner Network"
    },
    {
        img: img2,
        title:"86M+",
        content:"Industry Network"
    },
    {
        img: img3,
        title:"4,600++",
        content:"Online Programs"
    },{
        img: img4,
        title:"260+",
        content:"Content Partners"
    }

]
  return (
    <div className='container3'>
        {table.map((e,i)=>{
            return (
                <div className='outer' key={i}>
                <img src={e?.img}/>
             <h3>{e.title}</h3>
             <p>{e.content}</p>
               </div>
            )
        })}
      
        </div>
  )
}
