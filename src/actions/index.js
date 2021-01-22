// Movement Actions
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
// Route actions
export const createRoute = (driverRoute) => ({
  type: "CREATE_ROUTE",
  payload: driverRoute,
});

// UI Actions
export const openForm = () => ({
  type: "OPEN_FORM",
});

export const closeForm = () => ({
  type: "CLOSE_FORM",
});

export const openEditForm = (id) => ({
  type: "OPEN_EDIT_FORM",
  payload: id,
});

export const closeEditForm = () => ({
  type: "CLOSE_EDIT_FORM",
});

export const changeSideView = () => ({
  type: "CHANGE_SIDE_VIEW",
});
export const changeMapView = () => ({
  type: "CHANGE_MAP_VIEW",
});
export const selectActiveMovement = (id) => ({
  type: "SELECT_ACTIVE_MOVEMENT",
  payload: id,
});
export const deselectActiveMovement = () => ({
  type: "DESELECT_ACTIVE_MOVEMENT",
});
