import React from "react";
import { connect } from "react-redux";
import { editMovement, createRoute } from "../actions";
import { checkValidMovement, baseGenerateDriverRoute } from "../helpers";

const mapDispatchToProps = (dispatch) => {
  return {
    editMovement: (movement) => dispatch(editMovement(movement)),
    createRoute: (driverRoute) => dispatch(createRoute(driverRoute)),
  };
};

const mapStateToProps = (state) => {
  return {
    movements: state.movements,
  };
};

const ConnectedEditMovementForm = ({
  createRoute,
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
    } else {
      alert("no");
    }
    createRouter();
  };

  function createRouter() {
    if (movements.length !== 0) {
      createRoute(baseGenerateDriverRoute(movements));
    }
  }

  return (
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
      />

      <input
        required
        name="start-lon"
        type="Number"
        placeholder="Start longitude"
      />

      <input required name="end-lat" type="Number" placeholder="End latitude" />

      <input
        required
        name="end-lon"
        type="Number"
        placeholder="End longitude"
      />

      <button>Post</button>
    </form>
  );
};

const EditMovementForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedEditMovementForm);

export default EditMovementForm;