import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function MovementForm() {
  return (
    <Form>
      <Form.Label>Start</Form.Label>
      <Form.Row>
        <Form.Group controlId="formStartLat">
          <Form.Label>Lat</Form.Label>
          <Form.Control placeholder="Latitude" />
        </Form.Group>

        <Form.Group controlId="formStartLon">
          <Form.Label>Lon</Form.Label>
          <Form.Control placeholder="Longitude" />
        </Form.Group>
      </Form.Row>

      <Form.Label>End</Form.Label>
      <Form.Row>
        <Form.Group controlId="formEndLat">
          <Form.Label>Lat</Form.Label>
          <Form.Control placeholder="Latitude" />
        </Form.Group>

        <Form.Group controlId="formEndLon">
          <Form.Label>Lon </Form.Label>
          <Form.Control placeholder="Longitude" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formMovementDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control placeholder="Enter Description" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default MovementForm;
