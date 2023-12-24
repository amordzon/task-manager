import { configureStore } from "@reduxjs/toolkit";
import myGroupsReducer from "./slices/myGroupsSlice";
import tasksReducer from "./slices/tasksSlice";

export const store = configureStore({
  reducer: {
    myGroups: myGroupsReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
