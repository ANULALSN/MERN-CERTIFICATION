import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function Form1() {
  const [cardtitle,setCardtitle]=useState('')
  const [image,setImage]=useState('')
  const [description,setDescription]=useState('')

 const FormSubmit= async(event)=>{
  event.preventDefault();
  try {
    const response = await fetch('http://localhost:3000/blogapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardtitle,image,description})
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    alert("Data inserted successfully");
    console.log(data);
    
    // Reset form fields
    // setName('');
    // setEmail('');
    // setImage('')
} catch (error) {
    console.error(error);
    alert("Error: " + error.message);
}

 }



  return (
    <div>  <Form onSubmit={FormSubmit}>
      {/* <Row className="mb-3"> */}
        <Form.Group  controlId="formGridTitle">
          <Form.Label><u><b>Card Title</b></u></Form.Label>
          <Form.Control type="text" placeholder="Enter card title" onChange= {(e) => setCardtitle(e.target.value)} />
        </Form.Group>

        <Form.Group  controlId="formGridImage">
          <Form.Label><u><b>Image URL</b></u></Form.Label>
          <Form.Control type="text" placeholder="Enter image URL"   onChange={(e) => setImage(e.target.value)} />
        </Form.Group>
      {/* </Row> */}

      <Form.Group className="mb-3" controlId="formGridDescription" >
        <Form.Label><u><b>Description</b></u></Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter description" onChange={(e) => setDescription(e.target.value)}  />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form></div>
  )
}

export default Form1