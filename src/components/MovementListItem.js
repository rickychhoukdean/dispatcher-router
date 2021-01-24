import React from "react";
import { connect } from "react-redux";
import {
  deleteMovement,
  openEditForm,
  selectActiveMovement,
  deselectActiveMovement,
} from "../actions";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovement: (movement) => dispatch(deleteMovement(movement)),
    openEditForm: (uiState) => dispatch(openEditForm(uiState)),
    selectActiveMovement: (id) => dispatch(selectActiveMovement(id)),
    deselectActiveMovement: () => dispatch(deselectActiveMovement()),
  };
};

function ConnectedMovementListItem({
  openEditForm,
  deleteMovement,
  start,
  end,
  description,
  id,
  selectActiveMovement,
  deselectActiveMovement,
}) {
  const openForm = () => {
    let payload = { id, start, end, description };

    openEditForm(payload);
  };

  return (
    <div
      className="movement__list-item"
      onMouseOver={() => {
        selectActiveMovement(id);
      }}
      onMouseOut={() => {
        deselectActiveMovement();
      }}
    >
      <div className="movement__list-item--description-holder">
        <div className="movement__list-item--coordinate">{description}</div>
        <div className="movement__list-item--coordinate">
          Start: {start.cityName} ({start.coordinate[0]},{start.coordinate[1]})
        </div>
        <div className="movement__list-item--coordinate">
          End: {end.cityName} ({end.coordinate[0]},{end.coordinate[1]})
        </div>
      </div>
      <div className="movement__list-item--button-holder">
        <div
          className="button-container p-2"
          onClick={() => {
            openForm(id);
          }}
        >
          <button className="movement__list-item--modify btn btn-custom outline">
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <div>Edit</div>
        </div>

        <div
          className="button-container p-2"
          onClick={() => {
            toast("Movement deleted!");
            deleteMovement(id);
          }}
        >
          <button className="movement__list-item--delete btn btn-custom outline">
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <div>Delete</div>
        </div>
      </div>
    </div>
  );
}

const MovementListItem = connect(
  null,
  mapDispatchToProps
)(ConnectedMovementListItem);

export default MovementListItem;
