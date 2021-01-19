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
    default:
      return state;
  }
};

export default uiState;
