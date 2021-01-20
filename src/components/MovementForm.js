import React from "react";
import { connect } from "react-redux";
import { createMovement, closeForm } from "../actions";
import { checkValidMovement } from "../helpers";
import Modal from "react-bootstrap/Modal";
import {
  MAX_LATITUDE,
  MAX_LONGITUDE,
  MIN_LATITUDE,
  MIN_LONGITUDE,
} from "../constants/coordinates";

const mapDispatchToProps = (dispatch) => {
  return {
    createMovement: (movement) => dispatch(createMovement(movement)),
    closeForm: (uiState) => dispatch(closeForm(uiState)),
  };
};

const mapStateToProps = (state) => {
  return {
    movements: state.movements,
    uiState: state.uiState,
  };
};

const ConnectedMovementForm = ({
  closeForm,
  uiState,
  createMovement,
  movements,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const description = e.target["description"].value;
    const startLat = e.target["start-lat"].value;
    const startLon = e.target["start-lon"].value;
    const endLat = e.target["end-lat"].value;
    const endLon = e.target["end-lon"].value;

    const payload = {
      start: [startLat, startLon],
      end: [endLat, endLon],
      description,
    };
    if (checkValidMovement(movements, payload)) {
      // TODO: Better alert
      createMovement(payload);
      closeForm();
    } else {
      alert("no");
    }
  };

  return (
    <Modal show={uiState.openFormDialog} onHide={closeForm}>
      <Modal.Header closeButton>
        <Modal.Title>New Movement Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <input
            required
            name="description"
            type="text"
            placeholder="Description"
          />

          <input
            required
            name="start-lat"
            type="Number"
            placeholder="Start latitude"
            min={MIN_LATITUDE}
            max={MAX_LATITUDE}
          />

          <input
            required
            name="start-lon"
            type="Number"
            placeholder="Start longitude"
            min={MIN_LONGITUDE}
            max={MAX_LONGITUDE}
          />

          <input
            required
            name="end-lat"
            type="Number"
            placeholder="End latitude"
            min={MIN_LATITUDE}
            max={MAX_LATITUDE}
          />

          <input
            required
            name="end-lon"
            type="Number"
            placeholder="End longitude"
            min={MIN_LONGITUDE}
            max={MAX_LONGITUDE}
          />

          <button>Post</button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

const MovementForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedMovementForm);

export default MovementForm;
