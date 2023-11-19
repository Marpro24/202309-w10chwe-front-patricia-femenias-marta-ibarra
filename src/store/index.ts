import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { robotsReducer } from "./features/robots/robotsSlice";

export const store = configureStore({
  reducer: {
    robotsState: robotsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
