import { configureStore } from "@reduxjs/toolkit";
import myGroupsReducer from "./slices/myGroupsSlice";

export const store = configureStore({
  reducer: {
    myGroups: myGroupsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
