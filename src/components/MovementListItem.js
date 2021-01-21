import React from "react";
import { connect } from "react-redux";
import { deleteMovement, openEditForm } from "../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovement: (movement) => dispatch(deleteMovement(movement)),
    openEditForm: (uiState) => dispatch(openEditForm(uiState)),
  };
};

function ConnectedMovementListItem({
  openEditForm,
  deleteMovement,
  start,
  end,
  description,
  id,
}) {
  const openForm = () => {
    let payload = { id, start, end, description };

    openEditForm(payload);
  };

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
          className="movement__list-item--modify btn btn-primary"
          onClick={() => {
            openForm(id);
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button
          className="movement__list-item--delete btn btn-primary"
          onClick={() => {
            deleteMovement(id);
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
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
