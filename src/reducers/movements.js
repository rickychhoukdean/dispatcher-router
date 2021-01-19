const movements = (state = [], action) => {
  switch (action.type) {
    case "CREATE_MOVEMENT":
      return state.concat([action.payload]);
    case "DELETE_MOVEMENT":
      return state.filter((movement) => movement.id !== action.payload);
    case "EDIT_MOVEMENT":
      let editMovement = [...state];
      editMovement[action.payload.id] = action.payload.movement;
      return [...editMovement];
    default:
      return state;
  }
};

export default movements;
