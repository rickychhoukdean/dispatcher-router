import { generateBestRoute } from "./routeHelpers";
import { checkValidMovement } from "./validationHelpers";

describe("generateBestRoute", () => {
  test("Return an emptry array when given array is empty", () => {
    const movements = [];
    const wantedResult = [];
    expect(generateBestRoute(movements)).toStrictEqual(wantedResult);
  });
  test("Return basic array if there is one movement", () => {
    const movements = [
      {
        start: { coordinate: [3, 4], cityName: "Toronto" },
        end: { coordinate: [5, 5], cityName: "Paris" },
        description: "a",
      },
    ];
    const wantedResult = [
      [3, 4],
      [5, 5],
    ];
    expect(generateBestRoute(movements)).toStrictEqual(wantedResult);
  });
  test("Don't duplicate coordinates if they are equal", () => {
    const movements = [
      {
        start: { coordinate: [0, 0], cityName: "Toronto" },
        end: { coordinate: [1, 1], cityName: "Cool" },
        description: "a",
      },
      {
        start: { coordinate: [1, 1], cityName: "Toronto" },
        end: { coordinate: [2, 2], cityName: "Cool" },
        description: "a",
      },
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
      {
        start: { coordinate: [1, 1], cityName: "Toronto" },
        end: { coordinate: [3, 3], cityName: "Cool" },
        description: "a",
      },
      {
        start: { coordinate: [2, 2], cityName: "Toronto" },
        end: { coordinate: [4, 4], cityName: "Cool" },
        description: "a",
      },
      {
        start: { coordinate: [0, 0], cityName: "Toronto" },
        end: { coordinate: [5, 5], cityName: "Cool" },
        description: "a",
      },
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
  test("Return false if there is adding duplicate object in the array. City will not affect this", () => {
    const movements = [
      {
        start: { coordinate: ["300", "400"], cityName: "Toronto" },
        end: { coordinate: ["500", "500"], cityName: "Scarborough" },
        description: "first",
      },
      {
        start: { coordinate: ["100", "400"], cityName: "Chinatown" },
        end: { coordinate: ["500", "500"], cityName: "X" },
        description: "first",
      },
    ];
    const newMovement = {
      start: { coordinate: ["300", "400"], cityName: "asd" },
      end: { coordinate: ["500", "500"], cityName: "Scarborough" },
      description: "first",
    };
    expect(checkValidMovement(movements, newMovement)).toContain("Error");
  });
  test("Return false if adding a movement with same start and end", () => {
    const movements = [
      {
        start: { coordinate: [1, 1], cityName: "Vancouver" },
        end: { coordinate: [3, 3], cityName: "Hi" },
        description: "a",
      },
    ];
    const newMovement = {
      start: { coordinate: [1, 1], cityName: "The" },
      end: { coordinate: [1, 1], cityName: "bye" },
      description: "a",
    };
    expect(checkValidMovement(movements, newMovement)).toContain("Error");
  });
  test("Return true if adding a new movement with a different start and end", () => {
    const movements = [
      {
        start: { coordinate: ["300", "400"], cityName: "Toronto" },
        end: { coordinate: ["500", "500"], cityName: "Scarborough" },
        description: "first",
      },
    ];
    const newMovement = {
      start: { coordinate: ["100", "400"], cityName: "Chinatown" },
      end: { coordinate: ["500", "500"], cityName: "X" },
      description: "first",
    };
    expect(checkValidMovement(movements, newMovement)).toBe(true);
  });
  test("Return true if adding a movement with same coordinates but different description", () => {
    const movements = [
      {
        start: { coordinate: [1, 1], cityName: "hi" },
        end: { coordinate: [3, 3], cityName: "Test" },
        description: "b",
      },
    ];
    const newMovement = {
      start: { coordinate: [1, 1], cityName: "hi" },
      end: { coordinate: [3, 3], cityName: "Tesst" },
      description: "a",
    };
    expect(checkValidMovement(movements, newMovement)).toBe(true);
  });
});
