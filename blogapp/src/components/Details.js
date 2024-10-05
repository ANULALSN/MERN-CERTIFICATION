import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'


const Details=()=>{
    const id=useParams();
    const [details,setDetails]=useState('');
    useEffect(()=>{
        fetch(`http://localhost:3000/blogapp${id}`).then(response=>response.json()).then(data=>setDetails(data)).catch(error=>console.error('Error:',error));
        // console.log(Blog)

    },[id])
    if (!details) {
        return <div>Loading...</div>;
      }
    
  return (
    <div><h2>{details.cardtitle}</h2>
    <p>{details.description}</p>
    <img src={details.image} alt={details.cardtitle} style={{ width: '100%', height: 'auto' }} />
    </div>
  )
}

export default Details