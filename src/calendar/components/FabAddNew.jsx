import { useUiStore } from "../../hooks";

export const FabAddNew = () => {
  const { startCreatingNewEvent } = useUiStore();

  return (
    <>
      <button className="btn btn-primary fab" onClick={startCreatingNewEvent}>
        <i className="fas fa-plus"></i>
      </button>
    </>
  );
};
