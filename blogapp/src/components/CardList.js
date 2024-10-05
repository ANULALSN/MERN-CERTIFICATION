import React,{useState,useEffect} from 'react'
import Cards from './Cards';
import { Row, Col } from 'react-bootstrap';


function CardList() {
    const [Blog,setBlog]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/blogapp').then(response=>response.json()).then(data=>setBlog(data)).catch(error=>console.error('Error:',error));
console.log(Blog)
    },[])
  return (
    // <div >
        
    //     {Blog.map(Blog=>(
    //         <Cards key={Blog._id} id={Blog._id} title={Blog.cardtitle} description={Blog.description} image={Blog.image}></Cards>
    //         ))}

    // </div>
     <Row className="mt-5 mb-4">
            {Blog.map(blog => (
                <Col key={blog._id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
                    <Cards id={blog._id} title={blog.cardtitle} description={blog.description} image={blog.image} />
                </Col>
            ))}
        </Row>
  );
}

export default CardList