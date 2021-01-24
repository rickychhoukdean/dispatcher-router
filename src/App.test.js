import { generateBestRoute, checkValidMovement } from "./helpers";

describe("generateBestRoute", () => {
  test("Return an emptry array when given array is empty", () => {
    const movements = [];
    const wantedResult = [];
    expect(generateBestRoute(movements)).toStrictEqual(wantedResult);
  });
  test("Return basic array if there is one movement", () => {
    const movements = [{ start: [3, 4], end: [5, 5], description: "a" }];
    const wantedResult = [
      [3, 4],
      [5, 5],
    ];
    expect(generateBestRoute(movements)).toStrictEqual(wantedResult);
  });
  test("Don't duplicate coordinates if they are equal", () => {
    const movements = [
      { start: [0, 0], end: [1, 1], description: "a" },
      { start: [1, 1], end: [2, 2], description: "a" },
    ];
    const wantedResult = [
      [0, 0],
      [1, 1],
      [2, 2],
    ];
    expect(generateBestRoute(movements)).toStrictEqual(wantedResult);
  });
  test("Find the most efficient route by visiting the closest node first", () => {
    const movements = [
      { start: [1, 1], end: [3, 3], description: "a" },
      { start: [2, 2], end: [4, 4], description: "a" },
      { start: [0, 0], end: [5, 5], description: "a" },
    ];
    const wantedResult = [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
    ];
    expect(generateBestRoute(movements)).toStrictEqual(wantedResult);
  });
});

describe("checkValidMovement", () => {
  test("Return false if there is adding duplicate object in the array", () => {
    const movements = [{ start: [1, 1], end: [3, 3], description: "a" }];
    const newMovement = { start: [1, 1], end: [3, 3], description: "a" };
    expect(checkValidMovement(movements, newMovement)).toContain("Error");
  });
  test("Return false if adding a movement with same start and end", () => {
    const movements = [{ start: [1, 1], end: [3, 3], description: "a" }];
    const newMovement = { start: [1, 1], end: [1, 1], description: "a" };
    expect(checkValidMovement(movements, newMovement)).toContain("Error");
  });
  test("Return true if adding a new movement with a different start and end", () => {
    const movements = [{ start: [1, 1], end: [3, 3], description: "a" }];
    const newMovement = { start: [2, 2], end: [3, 3], description: "a" };
    expect(checkValidMovement(movements, newMovement)).toBe(true);
  });
  test("Return true if adding a movement with same coordinates but different description", () => {
    const movements = [{ start: [1, 1], end: [3, 3], description: "b" }];
    const newMovement = { start: [1, 1], end: [3, 3], description: "a" };
    expect(checkValidMovement(movements, newMovement)).toBe(true);
  });
});
