import { useDispatch, useSelector } from "react-redux";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  return {
    //* PROPERTIES:
    events,
    activeEvent,

    //* METHODS:
  };
};
