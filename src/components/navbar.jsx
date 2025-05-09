import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; 

function navBar() {
  return (
      <Navbar expand="lg" className="navbr">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home" className="logo">Varun V</Navbar.Brand>

        {/* Navbar Toggle for Mobile View 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />*/}

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">  
            
            <Nav.Link href="#about" className="nav-links">About</Nav.Link>
            <Nav.Link href="#experience" className="nav-links">Skills</Nav.Link>
            <Nav.Link href="#projects" className="nav-links">Projects</Nav.Link>
            <Nav.Link href="#contact" className="nav-links">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navBar