import { useDispatch, useSelector } from "react-redux";
import {
  onClearActiveEvent,
  onCloseDateModal,
  onOpenDateModal,
  onChangeCreatingStatus,
} from "../store";

export const useUiStore = () => {
  const dispatch = useDispatch();
  const { isDateModalOpen } = useSelector((state) => state.ui);

  const closeDateModal = () => {
    dispatch(onChangeCreatingStatus("not-creating"));
    dispatch(onCloseDateModal());
  };

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const startCreatingNewEvent = () => {
    dispatch(onChangeCreatingStatus("creating"));
    dispatch(onClearActiveEvent());
    dispatch(onOpenDateModal());
  };

  return {
    //* PROPERTIES:
    isDateModalOpen,
    //* METHODS:
    closeDateModal,
    openDateModal,
    startCreatingNewEvent,
  };
};
