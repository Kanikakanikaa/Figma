import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assest/AntierMarketing_Blue.png";
import contactUs from "../../assest/Frame 1261155218.png";
import "./Header.scss";
export default function Header() {
  return (
    <Navbar className="header">
        <Navbar.Brand href="#" className="navLink">
          <img alt="" src={logo} />
        </Navbar.Brand>
        <Container className="container">
          <Nav className="nav">
            <Nav.Link href="#" className="item1">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="item1">
              Services
            </Nav.Link>
          </Nav>
        </Container>
        <Nav className="nav1">
          <Nav.Link href="#" className="item3">
            <img alt="" src={contactUs} />
          </Nav.Link>
        </Nav>
    </Navbar>
  );
}
