// function generateDriverRoute(movements) {
//   let convertedArray = [];

//   movements.forEach((movement) => {
//     convertedArray.push(Object.values(movement));
//   });

//   let res = [[0, 0]];

//   while (convertedArray.length) {

//   }

//   return res;
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

function euclidianDistance(start, end) {
  return Math.sqrt(
    Math.pow(start[0] - end[0], 2) + Math.pow(start[1] - end[1], 2)
  );
}

function compareArray(a, b) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

export { baseGenerateDriverRoute };
