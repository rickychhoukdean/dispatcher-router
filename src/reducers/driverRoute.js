const driverRoute = (state = [], action) => {
  switch (action.type) {
    case "CREATE_ROUTE":
      return action.payload;
    default:
      return state;
  }
};

export default driverRoute;
