import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import useForm from '../hooks/useForm.js';

function TodoForm(props) {
  const [item, setItem] = useState({});
  const [handleSubmit, handleInputChange] = useForm(getFromData);

  function getFromData(item){
    console.log('inside From component!');
    props.handleSubmit(item);
    setItem({});
  }

  // const handleInputChange = (e) => {
  //   setItem({ ...item, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   console.log("handleSubmit >>> ")
  //   e.preventDefault();
  //   e.target.reset();
  //   props.handleSubmit(item);
  //   setItem({});
  // };

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Add Item</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>To Do Item</Form.Label>
              <Form.Control
                type="text"
                name="text"
                placeholder="Add To Do List Item"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Assigned To</Form.Label>
              <Form.Control
                type="text"
                name="assignee"
                placeholder="Assigned To"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicRangeCustom">
              <Form.Label>Difficulty Rating</Form.Label>
              <Form.Control
                defaultValue="1"
                type="range"
                min="1"
                max="5"
                name="difficulty"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button type="submit">Add Item</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default TodoForm;

/*

<form onSubmit={handleSubmit}>
        <label>
          <span>To Do Item</span>
          <input
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Difficulty Rating</span>
          <input
            defaultValue="1"
            type="range"
            min="1"
            max="5"
            name="difficulty"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Assigned To</span>
          <input
            type="text"
            name="assignee"
            placeholder="Assigned To"
            onChange={handleInputChange}
          />
        </label>
        <button>Add Item</button>
      </form>

      */
