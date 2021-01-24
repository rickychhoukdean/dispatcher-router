import React, { useState } from "react";
import { connect } from "react-redux";
import { createMovement, closeForm } from "../actions";
import { checkValidMovement } from "../helpers";
import { toast } from "react-toastify";

import Modal from "react-bootstrap/Modal";
import {
  MAX_LATITUDE,
  MAX_LONGITUDE,
  MIN_LATITUDE,
  MIN_LONGITUDE,
} from "../constants/coordinates";

const LATITUDE_PLACEHOLDER_TEXT = `${MIN_LATITUDE} - ${MAX_LATITUDE}`;
const LONGITUDE_PLACEHOLDER_TEXT = `${MIN_LONGITUDE} - ${MAX_LONGITUDE}`;

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
  const [errors, setErrors] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const description = e.target["description"].value;
    const startLat = e.target["start-lat"].value;
    const startLon = e.target["start-lon"].value;
    const startCity = e.target["start-city"].value;
    const endLat = e.target["end-lat"].value;
    const endLon = e.target["end-lon"].value;
    const endCity = e.target["end-city"].value;

    const movement = {
      start: { coordinate: [startLat, startLon], cityName: startCity },
      end: { coordinate: [endLat, endLon], cityName: endCity },
      description,
    };
    if (checkValidMovement(movements, movement) === true) {
      createMovement(movement);
      toast("Movement Created!");
      setErrors(null);
      closeForm();
    } else {
      setErrors(checkValidMovement(movements, movement));
    }
  };

  return (
    <Modal show={uiState.openFormDialog} onHide={closeForm}>
      <Modal.Header closeButton>
        <Modal.Title>New Movement Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <h4 className="form__section">General</h4>
          <div className="form-row form-group">
            <div className="col">
              <label htmlFor="description">Description</label>
              <input
                required
                name="description"
                id="description"
                type="text"
                placeholder="Movement description"
                className="form-control"
              />
            </div>
          </div>
          <h4 className="form__section">Start</h4>
          <div className="form-row form-group">
            <div className="col">
              <label htmlFor="start-lat">Latitude</label>
              <input
                required
                name="start-lat"
                id="start-lat"
                type="Number"
                placeholder={LATITUDE_PLACEHOLDER_TEXT}
                min={MIN_LATITUDE}
                max={MAX_LATITUDE}
                className="form-control"
              />
            </div>
            <div className="col">
              <label htmlFor="start-lon">Longitude</label>
              <input
                required
                name="start-lon"
                id="start-lon"
                type="Number"
                placeholder={LONGITUDE_PLACEHOLDER_TEXT}
                min={MIN_LONGITUDE}
                max={MAX_LONGITUDE}
                className="form-control"
              />
            </div>

            <div className="col">
              <label htmlFor="start-city">City</label>
              <input
                required
                name="start-city"
                id="start-city"
                type="text"
                placeholder="City Name"
                className="form-control"
              />
            </div>
          </div>
          <h4 className="form__section">End</h4>
          <div className="form-row form-group">
            <div className="col">
              <label htmlFor="end-lat">Latitude</label>

              <input
                required
                name="end-lat"
                id="end-lat"
                type="Number"
                placeholder={LATITUDE_PLACEHOLDER_TEXT}
                min={MIN_LATITUDE}
                max={MAX_LATITUDE}
                className="form-control"
              />
            </div>
            <div className="col">
              <label htmlFor="end-long">Longitude</label>

              <input
                required
                name="end-lon"
                id="end-lon"
                type="Number"
                placeholder={LONGITUDE_PLACEHOLDER_TEXT}
                min={MIN_LONGITUDE}
                max={MAX_LONGITUDE}
                className="form-control"
              />
            </div>
            <div className="col">
              <label htmlFor="end-city">City</label>
              <input
                required
                name="end-city"
                id="end-city"
                type="text"
                placeholder="City Name"
                className="form-control"
              />
            </div>
          </div>
          <div className="form__errors">{errors}</div>
          <button className="btn btn-primary">Submit</button>
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
