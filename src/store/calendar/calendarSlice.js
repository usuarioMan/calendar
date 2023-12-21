import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {},
});
// Action creators are generated for each case reducer function
export const { increment } = calendarSlice.actions;
