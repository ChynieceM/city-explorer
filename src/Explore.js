import React from "react";
import { Form, Button } from "react-bootstrap";

function Explore(props) {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="Enter City">Enter City Name</Form.Label>
        <Form.Control id="cityInput" placeholder="City Name" />
        <Button onClick={props.fetchData}>Explore!</Button>
      </Form.Group>
    </Form>
  );
}

export default Explore;
