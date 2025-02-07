import React from 'react'
import { Container } from 'react-bootstrap';
import './footer.scss';
import logo from '../../assest/logo.png'
import contactlogo from '../../assest/messagebox.png'
import vector from "../../assest/Vector 9.png";

export default function Footer() {
  return (
    <Container className='footer'>
        <div className='outer'>
            <div className='logo'>
            <img src={logo}/>
            <p>A trusted leader in transformative education, offering hands-on certifications in diverse digital disciplines, empowering every learner to thrive in their chosen field.</p>
            </div>
            <div className='list'>
                <ul>
                    <li>About Us</li>
                    <li>Schools </li>
                    <li>
                        <span>
                    Courses
                    <img src={vector}/>
                        </span></li>
                    <li>Programs</li>
                    <li>University</li>
                    <li>Corporate</li>
                    <li>Government</li>
                    

                </ul>
            </div>
            <div className='address'>
                <h6>
                Address
                </h6>
                <p>
                E 221, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160059
                </p>
                <h6>Contact Us</h6>
                <span>
                <img src={contactlogo} alt=""/>
                <p>info@asb.guru</p>
                </span>
            </div>
        </div>
    </Container>
  )
}
