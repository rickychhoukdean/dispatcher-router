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
    <div>
      Start:{start}
      End:{end}
      Description:{description}
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
      <button>Modify</button>
    </div>
  );
}

const MovementListItem = connect(
  null,
  mapDispatchToProps
)(ConnectedMovementListItem);

export default MovementListItem;
