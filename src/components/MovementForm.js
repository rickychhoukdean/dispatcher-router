import React, { useState } from "react";
import { connect } from "react-redux";
import { createMovement } from "../actions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const mapDispatchToProps = (dispatch) => {
  return {
    createMovement: (movement) => dispatch(createMovement(movement)),
  };
};

const ConnectedMovementForm = ({ createMovement }) => {
  const [start, setStart] = useState([0, 0]);
  const [end, setEnd] = useState([0, 0]);
  const [description, setDescription] = useState("");

  function submitForm() {
    const payload = { start, end, description };
    createMovement(payload);
  }

  return (
    <Form>
      <Form.Label>Start</Form.Label>
      <Form.Row>
        <Form.Group controlId="formStartLat">
          <Form.Label>Lat</Form.Label>
          <Form.Control
            placeholder="Latitude"
            onChange={(e) => {
              setStart([e.target.value, start[1]]);
            }}
          />
        </Form.Group>

        <Form.Group controlId="formStartLon">
          <Form.Label>Lon</Form.Label>
          <Form.Control
            placeholder="Longitude"
            onChange={(e) => {
              setStart([start[0], e.target.value]);
            }}
          />
        </Form.Group>
      </Form.Row>

      <Form.Label>End</Form.Label>
      <Form.Row>
        <Form.Group controlId="formEndLat">
          <Form.Label>Lat</Form.Label>
          <Form.Control
            placeholder="Latitude"
            onChange={(e) => {
              setEnd([e.target.value, start[1]]);
            }}
          />
        </Form.Group>

        <Form.Group controlId="formEndLon">
          <Form.Label>Lon </Form.Label>
          <Form.Control
            placeholder="Longitude"
            onChange={(e) => {
              setEnd([start[0], e.target.value]);
            }}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formMovementDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          placeholder="Enter Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </Form.Group>

      <Button
        variant="primary"
        onClick={() => {
          submitForm();
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

const MovementForm = connect(null, mapDispatchToProps)(ConnectedMovementForm);

export default MovementForm;
