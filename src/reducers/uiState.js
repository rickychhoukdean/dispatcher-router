const uiState = (state = [], action) => {
  switch (action.type) {
    case "OPEN_FORM":
      return {
        ...state,
        openFormDialog: true,
      };

    case "CLOSE_FORM":
      return {
        ...state,
        openFormDialog: false,
      };

    case "OPEN_EDIT_FORM":
      return {
        ...state,
        openEditDialog: true,
        movementToEdit: action.payload,
      };

    case "CLOSE_EDIT_FORM":
      return {
        ...state,
        openEditDialog: false,
      };
    case "CHANGE_SIDE_VIEW":
      return {
        ...state,
        sideView: !state.sideView,
      };
    case "CHANGE_MAP_VIEW":
      return {
        ...state,
        mapView: !state.mapView,
      };

    case "SELECT_ACTIVE_MOVEMENT":
      return {
        ...state,
        activeMovement: action.payload,
      };
    case "DESELECT_ACTIVE_MOVEMENT":
      return {
        ...state,
        activeMovement: null,
      };
    default:
      return state;
  }
};

export default uiState;
