import React, { useState } from "react";
import { connect } from "react-redux";
import { createMovement, createRoute } from "../actions";
import { checkValidMovement, baseGenerateDriverRoute } from "../helpers";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const mapDispatchToProps = (dispatch) => {
  return {
    createMovement: (movement) => dispatch(createMovement(movement)),
    createRoute: (driverRoute) => dispatch(createRoute(driverRoute)),
  };
};

const mapStateToProps = (state) => {
  return {
    movements: state.movements,
  };
};

const ConnectedMovementForm = ({ createRoute, createMovement, movements }) => {
  const [start, setStart] = useState([null, null]);
  const [end, setEnd] = useState([null, null]);
  const [description, setDescription] = useState("");

  function submitForm() {
    const payload = { start, end, description };

    if (checkValidMovement(movements, payload)) {
      // TODO: Better alert
      createMovement(payload);
    } else {
      alert("no");
    }
    createRouter();
  }
  // TODO: Move create route somewher else
  function createRouter() {
    if (movements.length !== 0) {
      createRoute(baseGenerateDriverRoute(movements));
    }
  }

  return (
    <Form>
      <Form.Label>Start</Form.Label>
      <Form.Row>
        <Form.Group controlId="formStartLat">
          <Form.Label>Lat</Form.Label>
          <Form.Control
            required
            placeholder="Latitude"
            onChange={(e) => {
              setStart([e.target.value, start[1]]);
            }}
          />
        </Form.Group>

        <Form.Group controlId="formStartLon">
          <Form.Label>Lon</Form.Label>
          <Form.Control
            required
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
            required
            placeholder="Latitude"
            onChange={(e) => {
              setEnd([e.target.value, end[1]]);
            }}
          />
        </Form.Group>

        <Form.Group controlId="formEndLon">
          <Form.Label>Lon </Form.Label>
          <Form.Control
            required
            placeholder="Longitude"
            onChange={(e) => {
              setEnd([end[0], e.target.value]);
            }}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formMovementDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          required
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

const MovementForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedMovementForm);

export default MovementForm;
