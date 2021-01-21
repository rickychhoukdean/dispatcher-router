import React from "react";
import { connect } from "react-redux";
import { editMovement, closeEditForm } from "../actions";
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
    editMovement: (id, movement) => dispatch(editMovement(id, movement)),
    closeEditForm: (uiState) => dispatch(closeEditForm(uiState)),
  };
};

const mapStateToProps = (state) => {
  return {
    movements: state.movements,
    uiState: state.uiState,
  };
};

const ConnectedEditMovementForm = ({
  closeEditForm,
  uiState,
  editMovement,
  movements,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const description = e.target["description"].value;
    const startLat = e.target["start-lat"].value;
    const startLon = e.target["start-lon"].value;
    const endLat = e.target["end-lat"].value;
    const endLon = e.target["end-lon"].value;

    const movement = {
      start: [startLat, startLon],
      end: [endLat, endLon],
      description,
    };
    if (checkValidMovement(movements, movement)) {
      // TODO: Better alert
      editMovement(uiState.movementToEdit.id, movement);
      closeEditForm();
    } else {
      alert("no");
    }
  };

  return (
    <Modal show={uiState.openEditDialog} onHide={closeEditForm}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Movement Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col">
              <label htmlFor="description">Description</label>
              <input
                required
                name="description"
                id="description"
                type="text"
                placeholder="Description"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <label htmlFor="start-lat">Start Latitude</label>
              <input
                required
                name="start-lat"
                id="start-lat"
                type="Number"
                placeholder="Start latitude"
                defaultValue={uiState.movementToEdit.start[0]}
                min={MIN_LATITUDE}
                max={MAX_LATITUDE}
                className="form-control"
              />
            </div>
            <div className="col">
              <label htmlFor="start-lon">Start Longitude</label>

              <input
                required
                name="start-lon"
                id="start-lon"
                type="Number"
                placeholder="Start longitude"
                defaultValue={uiState.movementToEdit.start[1]}
                min={MIN_LONGITUDE}
                max={MAX_LONGITUDE}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <label htmlFor="end-lat">End Latitude</label>

              <input
                required
                name="end-lat"
                id="end-lat"
                type="Number"
                placeholder="End latitude"
                defaultValue={uiState.movementToEdit.end[0]}
                min={MIN_LATITUDE}
                max={MAX_LATITUDE}
                className="form-control"
              />
            </div>
            <div className="col">
              <label htmlFor="end-long">End Longitude</label>

              <input
                required
                name="end-lon"
                id="end-lon"
                type="Number"
                placeholder="End longitude"
                defaultValue={uiState.movementToEdit.end[1]}
                min={MIN_LONGITUDE}
                max={MAX_LONGITUDE}
                className="form-control"
              />
            </div>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

const EditMovementForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedEditMovementForm);

export default EditMovementForm;
