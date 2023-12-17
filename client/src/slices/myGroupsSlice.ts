import { PayloadAction } from "./../../node_modules/@reduxjs/toolkit/dist/createAction.d";
import { Group } from "./../types/Group";
import { createSlice } from "@reduxjs/toolkit";

export type GroupsType = {
  myGroups: Group[] | [];
  visibleGroups: Group[] | [];
};

const initialState = {
  myGroups: [],
  visibleGroups: [],
};

export const myGroupsSlice = createSlice({
  name: "myGroups",
  initialState,
  reducers: {
    setGroups(state: GroupsType, action: PayloadAction<Group[]>) {
      state.myGroups = action.payload;
      state.visibleGroups = action.payload.slice(
        0,
        Math.min(action.payload.length, 4)
      );
    },
    showGroups(state: GroupsType) {
      state.visibleGroups =
        state.myGroups.length == state.visibleGroups.length
          ? state.myGroups.slice(0, Math.min(state.myGroups.length, 4))
          : state.myGroups;
    },
    addGroups(state: GroupsType, action: PayloadAction<Group>) {
      state.myGroups = [action.payload, ...state.myGroups];
      state.visibleGroups =
        state.myGroups.length == state.visibleGroups.length + 1
          ? state.myGroups
          : state.myGroups.slice(0, Math.min(state.myGroups.length, 4));
    },
  },
});

export const { setGroups, showGroups, addGroups } = myGroupsSlice.actions;

export default myGroupsSlice.reducer;
