import { useDispatch, useSelector } from "react-redux";
import { onSetActiveEvent } from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (eventId) => {
    dispatch(onSetActiveEvent(eventId));
  };

  return {
    //* PROPERTIES:
    events,
    activeEvent,
    setActiveEvent,

    //* METHODS:
  };
};
