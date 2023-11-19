import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RobotStructure, RobotsStructure } from "./types";

const initialRobotState: RobotsStructure = {
  robots: [],
};

const robotsSlice = createSlice({
  name: "robots",
  initialState: initialRobotState,
  reducers: {
    loadRobots: (
      currentState,
      action: PayloadAction<RobotStructure[]>,
    ): RobotsStructure => {
      return {
        ...currentState,
        robots: action.payload,
      };
    },
  },
});

export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;

export const robotsReducer = robotsSlice.reducer;
