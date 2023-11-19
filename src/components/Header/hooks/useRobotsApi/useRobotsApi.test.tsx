import { renderHook } from "@testing-library/react";
import useRobotsApi from "./useRobotsApi";
import { robotsApiMock } from "../../../../mocks/robotMock";

describe("Given a useRobotsApi hook", () => {
  describe("When it gets the information of three  robots", () => {
    test("Then it should show the information of these three robots", async () => {
      const expectedRobots = robotsApiMock;

      const {
        result: {
          current: { getRobotsApi },
        },
      } = renderHook(() => useRobotsApi());

      const currentRobots = await getRobotsApi();

      expect(currentRobots).toStrictEqual(expectedRobots);
    });
  });
});
