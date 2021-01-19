import React from "react";
import { connect } from "react-redux";
import MovementListItem from "./MovementListItem";
import Button from "react-bootstrap/Button";
import { openForm } from "../actions";

const mapStateToProps = (state) => {
  return {
    movements: state.movements,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openForm: (uiState) => dispatch(openForm(uiState)),
  };
};

function ConnectedMovementList({ movements, openForm }) {
  let movementList;

  if (movements.length > 0) {
    movementList = movements.map((movement, idx) => {
      return (
        <MovementListItem
          key={idx}
          id={idx}
          start={movement.start}
          end={movement.end}
          description={movement.description}
        />
      );
    });
  } else {
    movementList = <div>Please add a movement for the driver!</div>;
  }
  return (
    <div className="sidebar">
      <div className="movement__list">
        <Button variant="primary" onClick={openForm}>
          Add new Movement
        </Button>
        {movementList}
      </div>
    </div>
  );
}

const MovementList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedMovementList);

export default MovementList;
