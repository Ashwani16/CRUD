import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';


const Singer = ({
  id,
  singername,
  location,
  noofsong,
  experience,
  date,
  handleremovesinger
}) => {
    const history = useNavigate();
  return (
    <Card style={{ width: '18rem' }} className="singer">
      <Card.Body>
        <Card.Title className="singer-title">{singername}</Card.Title>
        <div className="singer-details">
          <div>Singer's Location: {location}</div>
          <div>Year of Starting: {experience} </div>
          <div>No. of Songs: {noofsong} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history(`/edit/${id}`)}>
  Edit
</Button>{' '}
        <Button variant="danger" onClick={() => handleremovesinger(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Singer;