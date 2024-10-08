import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav1.css';
import logo1 from '../logo1.jpg'
import { useNavigate } from 'react-router-dom';

function Nav1() {

  const navigate=useNavigate();
  const BlogCreate=()=>{
      navigate('/createblog');
  }
  return (
    <div>
      <div className="d-flex align-items-center mt-5">
  <img src={logo1} style={{ width: "150px", height: "150px" }} alt="Logo" />
  <h2 style={{ fontFamily: 'cursive', marginLeft: '10px' }} className='mb-0'>
    <b>Make a trip</b>
  </h2>
</div>

       
    <Navbar expand="lg" className="bg-body-tertiary bg-primary custom-navbar mt-5" style={{ maxHeight: '2000px' }} >
    <Container fluid>
    {/* <img src={logo1} style={{width:"50px",height:"50px"}}></img> */}
      <Navbar.Brand href="#"style={{ color: 'white' }}></Navbar.Brand>
      
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0 nav-link"
          style={{ maxHeight: '2000px' }}
          navbarScroll 
          
        >
         
          
          <Nav.Link href="#action1" style={{ color: 'white' }}>Home</Nav.Link>
          <Nav.Link onClick={BlogCreate} style={{ color: 'white' }}>Create blog</Nav.Link>
          <NavDropdown title="Product" id="navbarScrollingDropdown" style={{ color: 'white' }}>
            <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled style={{ color: 'white' }}>
            Contact Us
          </Nav.Link>
         
        
        </Nav>
        {/* <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Nav1