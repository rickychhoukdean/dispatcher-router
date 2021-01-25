// General helper functions

function euclidianDistance(start, end) {
  if (start && end) {
    return Math.sqrt(
      Math.pow(start[0] - end[0], 2) + Math.pow(start[1] - end[1], 2)
    );
  } else return Infinity;
}

function compareArray(a, b) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

function compareObjects(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function duplicateObjectInArray(array, obj) {
  for (let item of array) {
    if (
      compareObjects(item.start.coordinate, obj.start.coordinate) &&
      compareObjects(item.end.coordinate, obj.end.coordinate) &&
      obj.description === item.description
    ) {
      return true;
    }
  }
  return false;
}



export { euclidianDistance, compareArray, duplicateObjectInArray, compareObjects };
