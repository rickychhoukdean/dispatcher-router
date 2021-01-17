import { act } from "react-dom/test-utils";

const movements = (state = [], action) => {
  switch (action.type) {
    case "CREATE_MOVEMENT":
      let newMovement = [...state];
      newMovement.push(action.payload);
      return [...newMovement];
    case "DELETE_MOVEMENT":
      let deletedMovement = [...state];
      deletedMovement.splice(action.payload, 1);
      return [...deletedMovement];
    case "EDIT_MOVEMENT":
      let editMovement = [...state];
      editMovement[action.payload.id] = action.payload.movement;
      return [...editMovement];
    default:
      return state;
  }
};

export default movements;
