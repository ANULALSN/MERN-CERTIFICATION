import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css';
import {useNavigate} from 'react-router-dom';
import {  Col, Row } from 'react-bootstrap';

function Cards({id,title,description,image}) {
    const navigate=useNavigate();
    const handleBuyNow=()=>{
        navigate(`/checkout/${id}`);
    }
  return (
     <div className="d-flex justify-content-around mt-5 mb-4 " >
          <Row className="mt-5 mb-4" xs={1} md={2} lg={3} xl={4}>
    {/* <Card style={{ height:'28rem',width: '18rem' }}>
      <Card.Img variant="top" src="./greg-rakozy-oMpAz-DN-9I-unsplash.jpg"  style={{ height:'13rem',width: '18rem' }} />
      <Card.Body>
        <Card.Title>Moon</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="custom-navbar">Plan Trip</Button>
      </Card.Body>
    </Card>
    <Card style={{ height:'28rem',width: '18rem' }}>
      <Card.Img variant="top" src="./im2.jpg" style={{ height:'13rem',width: '18rem' }}/>
      <Card.Body>
        <Card.Title>Pyramid</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="custom-navbar">Plan Trip</Button>
      </Card.Body>
    </Card>
    <Card style={{ height:'28rem',width: '18rem' }}>
      <Card.Img variant="top" src="./im3.jpg" style={{ height:'13rem',width: '18rem' }} />
      <Card.Body>
        <Card.Title>Taj Mahal</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="custom-navbar">Plan Trip</Button>
      </Card.Body>
    </Card>
    <Card style={{ height:'28rem',width: '18rem' }}>
      <Card.Img variant="top" src="./im4.jpg" style={{ height:'13rem',width: '18rem' }} />
      <Card.Body>
        <Card.Title>Temple</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  className="custom-navbar" variant="primary">Plan Trip</Button>
      </Card.Body>
    </Card> */}
    <Card style={{ height:'28rem',width: '18rem' }}>
      <Card.Img variant="top" src={image} style={{ height:'13rem',width: '18rem' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <Button  className="custom-navbar" variant="primary" onClick={handleBuyNow}>Plan Trip</Button>
      </Card.Body>
    </Card>
    </Row>
  </div>
  
  )
}

export default Cards