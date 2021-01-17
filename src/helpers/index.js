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

let movements = [
  { start: [3, 4], end: [5, 5], description: "a" },
  { start: [1, 1], end: [3, 3], description: "a" },
  { start: [0, 0], end: [5, 5], description: "a" },
  { start: [2, 1], end: [3, 3], description: "a" },
  { start: [10, 40], end: [5, 5], description: "a" },
  { start: [2, 8], end: [3, 3], description: "a" },
];

// generateDriverRoute(movements);

// function euclidianDistance(start, end) {
//   return Math.sqrt(
//     Math.pow(start[0] - end[0], 2) + Math.pow(start[1] - end[1], 2)
//   );
// }

function baseGenerateDriverRoute(movements) {
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

export { baseGenerateDriverRoute, duplicateObjectInArray };
