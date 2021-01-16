import React from "react";
import { connect } from "react-redux";
import MovementListItem from "./MovementListItem";

const mapStateToProps = (state) => {
  return {
    movements: state.movements,
  };
};

function ConnectedMovementList({ movements }) {
  const movementList = movements.map((movement, idx) => {
    return (
      <MovementListItem
        key={idx}
        start={movement.start}
        end={movement.end}
        description={movement.description}
      />
    );
  });

  return <>{movementList}</>;
}

const MovementList = connect(mapStateToProps)(ConnectedMovementList);

export default MovementList;
