import robotsMock from "../../../mock/robotsMock";
import { loadRobotsActionCreator, robotsReducer } from "./robotsSlice";
import { RobotsStructure } from "./types";

describe("Given a robotsReducer reducer", () => {
  describe("When it receives an empty list and a robots list", () => {
    test("Then it should return a List of 3 robots in it", () => {
      const robotsList = robotsMock;
      const currentListState: RobotsStructure = {
        robots: [],
      };

      const newRobotsState = robotsReducer(
        currentListState,
        loadRobotsActionCreator(robotsList),
      );

      expect(newRobotsState.robots).toStrictEqual(robotsList);
    });
  });
});
