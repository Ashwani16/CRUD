import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const SingerForm = (props) => {
  const [singer, setSinger] = useState({
    singername: props.singer ? props.singer.singername : '',
    location: props.singer ? props.singer.location : '',
    experience: props.singer ? props.singer.experience : '',
    noofsong: props.singer ? props.singer.noofsong : '',
    date: props.singer ? props.singer.date : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { singername, location, noofsong, experience } = singer;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [singername, location, noofsong, experience ];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const singer = {
        id: uuidv4(),
        singername,
        location,
        noofsong,
        experience,
        date: new Date()
      };
      props.handleOnSubmit(singer);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'experience':
        if (value === '' || parseInt(value) === +value) {
          setSinger((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'noofsong':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setSinger((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setSinger((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Singer's Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="singername"
            value={singername}
            placeholder="Enter name of Singer"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="location">
          <Form.Label>Singer's Location</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="location"
            value={location}
            placeholder="Singer's Location"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="experience">
          <Form.Label>Experience(in year)</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="experience"
            value={experience}
            placeholder="Enter available experience"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="noofsong">
          <Form.Label>No. of Songs</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="noofsong"
            value={noofsong}
            placeholder="Enter No. of Songs "
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SingerForm;