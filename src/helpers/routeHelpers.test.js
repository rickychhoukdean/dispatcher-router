import { generateBestRoute } from "./routeHelpers";

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
