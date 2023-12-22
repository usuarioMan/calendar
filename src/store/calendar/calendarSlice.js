import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
  title: "cumple del pote",
  notes: "Hay que comprar potentially",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "Poteson",
  },
};

const initialState = {
  events: [tempEvent],
  activeEvent: null,
};
export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {},
});
// Action creators are generated for each case reducer function
export const { increment } = calendarSlice.actions;
