import { compareObjects, duplicateObjectInArray, compareArray } from "./index";

function checkValidMovementUpdate(movements, newMovement, oldMovement) {
  const editOld = { ...oldMovement };

  delete editOld["id"];
  if (compareObjects(editOld, newMovement)) {
    return true;
  }
  if (duplicateObjectInArray(movements, newMovement)) {
    return "Error: This movement already exists, please change parameters!";
  }
  if (
    compareArray(newMovement["start"].coordinate, newMovement["end"].coordinate)
  ) {
    return "Error: Start and end points cannot be the same";
  }
  return true;
}

function checkValidMovement(movements, newMovement) {
  if (duplicateObjectInArray(movements, newMovement)) {
    return "Error: This movement already exists, please change parameters!";
  }
  if (
    compareArray(newMovement["start"].coordinate, newMovement["end"].coordinate)
  ) {
    return "Error: Start and end points cannot be the same";
  }
  return true;
}

export { checkValidMovement, checkValidMovementUpdate };
