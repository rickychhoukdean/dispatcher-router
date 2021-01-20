import React from "react";
import { connect } from "react-redux";
import { editMovement, closeEditForm } from "../actions";
import { checkValidMovement } from "../helpers";
import Modal from "react-bootstrap/Modal";

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
          <input
            required
            name="description"
            type="text"
            placeholder="Description"
            defaultValue={uiState.movementToEdit.description}
          />

          <input
            required
            name="start-lat"
            type="Number"
            placeholder="Start latitude"
            defaultValue={uiState.movementToEdit.start[0]}
          />

          <input
            required
            name="start-lon"
            type="Number"
            placeholder="Start longitude"
            defaultValue={uiState.movementToEdit.start[1]}
          />

          <input
            required
            name="end-lat"
            type="Number"
            placeholder="End latitude"
            defaultValue={uiState.movementToEdit.end[0]}
          />

          <input
            required
            name="end-lon"
            type="Number"
            placeholder="End longitude"
            defaultValue={uiState.movementToEdit.end[1]}
          />

          <button>Post</button>
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
