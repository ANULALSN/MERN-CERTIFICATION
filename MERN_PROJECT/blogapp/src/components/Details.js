// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom'


// const Details=()=>{
//     const {id}=useParams();
//     const [details,setDetails]=useState('');
//     useEffect(()=>{
//         fetch(`http://localhost:3000/blogapp/${id}`).then(response=>response.json()).then(data=>setDetails(data)).catch(error=>console.error('Error:',error));
//         console.log(details)

//     },[id])
//     if (!details) {
//         return <div>Loading...</div>;
//       }
    
//   return (
//     <div><h2>{details.cardtitle}</h2>
//     <p>{details.description}</p>
//     <img src={details.image} alt={details.cardtitle} style={{ width: '100%', height: 'auto' }} />
//     </div>
//   )
// }

// export default Details
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import './card.css';

const Details = () => {
    const { id } = useParams(); // Destructure id from useParams
    const [details, setDetails] = useState(null); // Initialize with null for loading state

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/blogapp/${id}`); // Correct the fetch URL
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setDetails(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchDetails();
    }, [id]); // Only depend on id

    if (!details) {
        return <div>Loading...</div>;
    }

    return (
      <div className="d-flex justify-content-around mt-5 mb-4 " >
          
            {/* <h2>{details.cardtitle}</h2>
            
            <img src={details.image} alt={details.cardtitle} style={{ width: '100%', height: 'auto' }} />
            <p>{details.description}</p> */}
            <Card style={{ height:'50rem',width: '50rem' }}>
      <Card.Img variant="top" src={details.image} style={{ height:'13rem',width: '18rem' }} />
      <Card.Body>
        <Card.Title>{details.cardtitle}</Card.Title>
        <Card.Text>
         {details.description}
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>
    );
};

export default Details;
