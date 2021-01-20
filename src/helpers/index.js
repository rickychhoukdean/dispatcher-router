// function generateDriverRoute(movements, startingPoint = [0, 0]) {
//   let convertedArray = [];

//   movements.forEach((movement) => {
//     convertedArray.push(Object.values(movement));
//   });

//   let res = [];

//   convertedArray.sort((a, b) => {
//     return (
//       euclidianDistance(startingPoint, a[0]) -
//       euclidianDistance(startingPoint, b[0])
//     );
//   });

//   console.log(convertedArray);

//   // while (convertedArray.length) {

//   // }

//   return res;
// }

// generateDriverRoute(movements);

// function euclidianDistance(start, end) {
//   return Math.sqrt(
//     Math.pow(start[0] - end[0], 2) + Math.pow(start[1] - end[1], 2)
//   );
// }

import {
  MAX_LATITUDE,
  MAX_LONGITUDE,
  MIN_LATITUDE,
  MIN_LONGITUDE,
} from "../constants/coordinates";

function baseGenerateDriverRoute(movements) {
  if (movements.length === 0) {
    return [];
  }
  let convertedArray = [];

  movements.forEach((movement) => {
    convertedArray.push(Object.values(movement));
  });

  let res = [convertedArray[0][0]];

  for (let i = 0; i < convertedArray.length; i++) {
    if (!compareArray(res[res.length - 1], convertedArray[i][0])) {
      res.push(convertedArray[i][0]);
    }
    if (!compareArray(res[res.length - 1], convertedArray[i][1])) {
      res.push(convertedArray[i][1]);
    }
  }
  return res;
}

function compareArray(a, b) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

function compareObjects(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function duplicateObjectInArray(array, obj) {
  for (let item of array) {
    if (compareObjects(item, obj)) {
      return true;
    }
  }
  return false;
}

function inRangeCoordinates(
  min = [MIN_LONGITUDE, MIN_LATITUDE],
  max = [MAX_LONGITUDE, MAX_LATITUDE],
  coordinates
) {
  // TODO: Add better coordinate validation
  return (
    min <= coordinates[0] &&
    max >= coordinates[0] &&
    min <= coordinates[1] &&
    max >= coordinates[1]
  );
}

function checkValidMovement(movements, newMovement) {
  return (
    !duplicateObjectInArray(movements, newMovement) &&
    !compareArray(newMovement["start"], newMovement["end"])
    //  &&
    // inRangeCoordinates(newMovement)
  );
}

function displayRoutes(route) {
  let str = "";
  for (let i = 0; i < route.length; i++) {
    str += route[i];
    if (i !== route.length - 1) {
      str += " to ";
    }
  }
  return str;
}

export { baseGenerateDriverRoute, checkValidMovement, displayRoutes };
