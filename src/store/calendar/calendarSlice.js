import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvents = [
  {
    _id: 5678,
    title: "cumple del pote",
    notes: "Hay que comprar potentially",
    start: new Date(),
    end: addHours(new Date().getTime(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "Poteson",
    },
  },
  {
    _id: 1234,
    title: "Otro evento",
    notes: "Muchos eventos",
    start: new Date(),
    end: addHours(new Date().getTime(), 1),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "Poteson",
    },
  },
];

const initialState = {
  events: tempEvents,
  activeEvent: null,
};
export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
  },
});

export const { onAddNewEvent, onSetActiveEvent } = calendarSlice.actions;
