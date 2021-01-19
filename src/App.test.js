import { baseGenerateDriverRoute, checkValidMovement } from "./helpers";

// TODO: Add tests for checkValidMovement

test("Test on bigger function", () => {
  let movements = [
    { start: [3, 4], end: [5, 5], description: "a" },
    { start: [1, 1], end: [3, 3], description: "a" },
    { start: [0, 0], end: [5, 5], description: "a" },
    { start: [2, 1], end: [3, 3], description: "a" },
  ];

  let result = baseGenerateDriverRoute(movements);
  let wantedResult = [
    [3, 4],
    [5, 5],
    [1, 1],
    [3, 3],
    [0, 0],
    [5, 5],
    [2, 1],
    [3, 3],
  ];
  expect(result).toStrictEqual(wantedResult);
});

test("Remove start and end if they are the same", () => {
  const movements = [
    { start: [0, 0], end: [1, 1], description: "a" },
    { start: [1, 1], end: [2, 2], description: "a" },
  ];

  let result = baseGenerateDriverRoute(movements);
  let wantedResult = [
    [0, 0],
    [1, 1],
    [2, 2],
  ];
  expect(result).toStrictEqual(wantedResult);
});

test("Single item", () => {
  let movements = [{ start: [3, 4], end: [5, 5], description: "a" }];
  let result = baseGenerateDriverRoute(movements);
  let wantedResult = [
    [3, 4],
    [5, 5],
  ];
  expect(result).toStrictEqual(wantedResult);
});

test("No item", () => {
  let movements = [];
  let result = baseGenerateDriverRoute(movements);
  let wantedResult = [];
  expect(result).toStrictEqual(wantedResult);
});
