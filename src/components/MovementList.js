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
  const movementList = movements.map((movement, idx) => {
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

  return (
    <div className="sidebar">
      <div className="movement__list">
        <Button
          variant="primary"
          onClick={() => {
            openForm(true);
          }}
        >
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
