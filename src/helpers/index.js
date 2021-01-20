function generateDriverRoute(movements, startingPoint = [0, 0]) {
  let convertedArray = parseMovementsIntoArray(movements);

  convertedArray.sort((a, b) => {
    return (
      euclidianDistance(startingPoint, a[0]) -
      euclidianDistance(startingPoint, b[0])
    );
  });

  // Initialize function
  let res = [convertedArray[0][0]];
  convertedArray[0].shift();
  let min = Infinity;
  let minIndex = 0;
  let runner = 0;

  while (convertedArray.length > 0) {
    let currentPoint = res[res.length - 1];
    let testPoint = convertedArray[runner][0];

    if (euclidianDistance(currentPoint, testPoint) < min) {
      min = euclidianDistance(currentPoint, testPoint);
      minIndex = runner;
    }

    if (runner === convertedArray.length - 1) {
      runner = 0;
      min = Infinity;

      let itemToPush = convertedArray[minIndex].shift();

      if (convertedArray[minIndex].length === 0) {
        convertedArray.splice(minIndex, 1);
      }

      if (!compareArray(itemToPush, res[res.length - 1])) {
        res.push(itemToPush);
      }
    } else {
      runner++;
    }
  }
  return res;
}

function generateBestRoute(movements) {
  let res = [];
  let sum = 0;
  let min = Infinity;
  let minIdx = 0;
  let parsed = parseMovementsIntoArray(movements);

  for (let movement of parsed) {
    let good = generateDriverRoute(movements, movement[0]);
    res.push(good);
  }

  for (let item of res) {
    for (let i = 0; i < item.length - 1; i++) {
      sum += euclidianDistance(item[i], item[i + 1]);
    }

    if (sum < min) {
      min = sum;
      minIdx = item;
    }
    sum = 0;
  }

  return minIdx;
}

function parseMovementsIntoArray(movements) {
  let convertedArray = [];

  movements.forEach((movement) => {
    convertedArray.push([
      Object.values(movement)[0],
      Object.values(movement)[1],
    ]);
  });
  return convertedArray;
}

function euclidianDistance(start, end) {
  if (start && end) {
    return Math.sqrt(
      Math.pow(start[0] - end[0], 2) + Math.pow(start[1] - end[1], 2)
    );
  } else return Infinity;
}

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

function checkValidMovement(movements, newMovement) {
  return (
    !duplicateObjectInArray(movements, newMovement) &&
    !compareArray(newMovement["start"], newMovement["end"])
  );
}

export {
  baseGenerateDriverRoute,
  checkValidMovement,
  generateDriverRoute,
  generateBestRoute,
};
