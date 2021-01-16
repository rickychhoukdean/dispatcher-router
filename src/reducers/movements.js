const movements = (state = [], action) => {
  switch (action.type) {
    case "CREATE_MOVEMENT":
      let newMovement = [...state];
      newMovement.push(action.payload);
      return [...newMovement];
    
    default:
      return state;
  }
};

export default movements;
