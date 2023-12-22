import { useDispatch, useSelector } from "react-redux";
import { onCloseDateModal, onOpenDateModal } from "../store";

export const useUiStore = () => {
  const dispatch = useDispatch();
  const { isDateModalOpen } = useSelector((state) => state.ui);

  const closeDateModal = () => {
    dispatch(onCloseDateModal());
  };

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };

  return {
    //* PROPERTIES:
    isDateModalOpen,
    //* METHODS:
    closeDateModal,
    openDateModal,
  };
};
