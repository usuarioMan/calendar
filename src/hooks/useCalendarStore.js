import { useDispatch, useSelector } from "react-redux";
import {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
} from "../store";
import { v4 as uuidv4 } from "uuid";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    // TODO: llegar al backedn

    calendarEvent._id
      ? dispatch(onUpdateEvent({ ...calendarEvent }))
      : dispatch(onAddNewEvent({ ...calendarEvent, _id: uuidv4() }));
  };

  const startDeletingEvent = async () => {
    // TODO: llegar al backend
    dispatch(onDeleteEvent());
  };

  return {
    //* PROPERTIES:
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    //* METHODS:
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
  };
};
