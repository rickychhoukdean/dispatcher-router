import React from "react";
import { connect } from "react-redux";
import { deleteMovement } from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovement: (movement) => dispatch(deleteMovement(movement)),
  };
};

function ConnectedMovementListItem({
  deleteMovement,
  start,
  end,
  description,
  id,
}) {
  function handleDelete() {
    deleteMovement(id);
  }

  return (
    <div className="movement__list-item">
      <div className="movement__list-item--description-holder">
        <h3 className="movement__list-item--description">
          Description:{description}
        </h3>
        <div className="movement__list-item--coordinate">
          Start Lat Long ({start[0]},{start[1]})
        </div>
        <div className="movement__list-item--coordinate">
          End Lat Long ({end[0]},{end[1]})
        </div>
      </div>
      <div className="movement__list-item--button-holder">
        <button
          className="movement__list-item--delete"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </button>
        <button className="movement__list-item--modify" onClick={() => {}}>
          Modify
        </button>
      </div>
    </div>
  );
}

const MovementListItem = connect(
  null,
  mapDispatchToProps
)(ConnectedMovementListItem);

export default MovementListItem;
