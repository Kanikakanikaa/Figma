import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../../assest/logo.png'
import "./header.scss"

export default function Header() {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand className='header'>
        <img
          alt=""
          src={logo}
          className="d-inline-block align-top"
        />{' '}
         </Navbar.Brand>
         <Nav className="nav">
            <Nav.Link  href="#Schools">Schools</Nav.Link>
            <Nav.Link href="#Courses">Courses</Nav.Link>
            <Nav.Link href="#Programs">Programs</Nav.Link>
            <Nav.Link href="#University">University</Nav.Link>
            <Nav.Link  href="#Corporate">Corporate</Nav.Link>
            <Nav.Link href="#Government">Government</Nav.Link>
            <Nav.Link href="#About Us">About Us</Nav.Link>
            <Nav.Link href="#Login">Login</Nav.Link>
            <Nav.Link href="#Contact"> <Button className='buttton'>Contact Us </Button></Nav.Link>


          </Nav>
             
    </Container>
  </Navbar>  )
}
