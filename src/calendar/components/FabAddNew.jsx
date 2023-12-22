import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks";

const newTempEvent = {
  title: "",
  notes: "",
  start: new Date(),
  end: addHours(new Date(), 1),
  bgColor: "#fffeed",
  user: {
    _id: "nan",
    name: "nan",
  },
};
export const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();

  const onClickNewEvent = () => {
    setActiveEvent(newTempEvent);
    openDateModal();
  };

  return (
    <>
      <button className="btn btn-primary fab" onClick={onClickNewEvent}>
        <i className="fas fa-plus"></i>
      </button>
    </>
  );
};
