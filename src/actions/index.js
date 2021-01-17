export const createMovement = (movement) => ({
  type: "CREATE_MOVEMENT",
  payload: movement,
});

export const deleteMovement = (id) => ({
  type: "DELETE_MOVEMENT",
  payload: id,
});

export const editMovement = (movement) => ({
  type: "EDIT_MOVEMENT",
  payload: movement,
});
