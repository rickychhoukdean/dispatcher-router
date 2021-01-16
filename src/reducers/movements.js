const movements = (state = [], action) => {
  switch (action.type) {
    case "ADD_MOVEMENTS":
      return { ...state, schedule: action.payload };
    default:
      return state;
  }
};

export default movements;