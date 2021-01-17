export const createMovement = (movement) => ({
  type: "CREATE_MOVEMENT",
  payload: movement,
});

export const deleteMovement = (id) => ({
  type: "DELETE_MOVEMENT",
  payload: id,
});

export const editMovement = (id, movement) => ({
  type: "EDIT_MOVEMENT",
  payload: { id, movement },
});

export const createRoute = (driverRoute) => ({
  type: "CREATE_ROUTE",
  payload: driverRoute,
});
