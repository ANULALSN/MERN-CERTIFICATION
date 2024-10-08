import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Nav1.css';
import USERLOGO from '../USERLOGO.png'


function Foo1() {
  return (
    <Navbar className="bg-body-tertiary fooalignbt custom-navbar" style={{ height: "100px" }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: 'white' }}>©2024</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end align-items-center">
        <div className="d-flex align-items-center ">
          <img src={USERLOGO} style={{ width: "20px", height: "20px" }} className="mr-2 usrlg" alt="User Logo" />
          Signed in as: <a href="#login">Mark Otto</a>
  </div>
           
          <Navbar.Text>
           
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Foo1