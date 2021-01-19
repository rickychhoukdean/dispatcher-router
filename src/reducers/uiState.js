const uiState = (state = [], action) => {
  switch (action.type) {
    case "OPEN_FORM":
      console.log("Open Add Article Form" + JSON.stringify(action));

      console.log(state, "sup");
      return {
        ...state,
        openFormDialog: true,
      };

    case "CLOSE_FORM":
      console.log("Close Add Article Form" + JSON.stringify(action));
      return {
        ...state,
        openFormDialog: false,
      };

    case "OPEN_EDIT_FORM":
      console.log("Open Edit Article Form" + JSON.stringify(action));
      return {
        ...state,
        uiState: {
          ...state.uiState,
          openEditDialog: true,
          articleToEdit: action.payload,
        },
      };

    case "CLOSE_EDIT_FORM":
      console.log("Close Edit Article Form" + JSON.stringify(action));
      return {
        ...state,
        uiState: {
          ...state.uiState,
          openEditDialog: false,
        },
      };
    default:
      return state;
  }
};

export default uiState;
