import { checkValidMovement } from "./validationHelpers";

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
