import React, { useEffect } from "react";
import { connect } from "react-redux";
import MovementListItem from "./MovementListItem";
import { createRoute } from "../actions";
import { generateBestRoute } from "../helpers/routeHelpers";

const mapStateToProps = (state) => {
  return {
    movements: state.movements,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createRoute: (route) => dispatch(createRoute(route)),
  };
};

function ConnectedMovementList({ createRoute, movements }) {
  let movementList;

  useEffect(() => {
    createRoute(generateBestRoute(movements));
  }, [movements, createRoute]);

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
    movementList = (
      <div>Please add a movement for the driver at the top right!</div>
    );
  }
  return (
    <div>
      <div className="movement__list">{movementList}</div>
    </div>
  );
}

const MovementList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedMovementList);

export default MovementList;
