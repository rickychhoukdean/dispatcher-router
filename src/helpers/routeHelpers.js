import { euclidianDistance, compareArray } from "./index";

function parseMovementsIntoArray(movements) {
  let convertedArray = [];

  movements.forEach((movement) => {
    convertedArray.push([
      Object.values(movement)[0].coordinate,
      Object.values(movement)[1].coordinate,
    ]);
  });
  return convertedArray;
}

function generateBestRoute(movements) {
  if (movements.length === 0) {
    return [];
  }

  let bestRouteArray = [];
  let min = Infinity;
  let res;
  let parsedArray = parseMovementsIntoArray(movements);

  for (const movement of parsedArray) {
    bestRouteArray.push(generateDriverRoute(movements, movement[0]));
  }

  for (const route of bestRouteArray) {
    let sum = 0;
    for (let i = 0; i < route.length - 1; i++) {
      sum += euclidianDistance(route[i], route[i + 1]);
    }
    if (sum < min) {
      min = sum;
      res = route;
    }
    sum = 0;
  }

  return res;
}

function generateDriverRoute(movements, startingPoint = [0, 0]) {
  let convertedArray = parseMovementsIntoArray(movements);

  convertedArray.sort((a, b) => {
    return (
      euclidianDistance(startingPoint, a[0]) -
      euclidianDistance(startingPoint, b[0])
    );
  });

  // Initialize function
  const res = [convertedArray[0][0]];
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

    // Reset runner after loop
    if (runner === convertedArray.length - 1) {
      runner = 0;
      min = Infinity;

      const itemToPush = convertedArray[minIndex].shift();

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

export { generateBestRoute };
