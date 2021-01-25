import { compareObjects, duplicateObjectInArray, compareArray } from "./index";
import { MAX_MOVEMENTS } from "../constants/map";

function checkValidMovementUpdate(movements, newMovement, oldMovement) {
  if (movements.length > MAX_MOVEMENTS) {
    return "Error: You have too many movements";
  }

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
  if (movements.length > MAX_MOVEMENTS) {
    return `Error: You have have more than ${MAX_MOVEMENTS} movements`;
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

export { checkValidMovement, checkValidMovementUpdate };
