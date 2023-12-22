import { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import DatePicker, { registerLocale } from "react-datepicker";
import { addHours, differenceInSeconds } from "date-fns";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useCalendarStore, useUiStore } from "../../hooks";

registerLocale("es", es);
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {
  const { closeDateModal, isDateModalOpen } = useUiStore();
  const { activeEvent } = useCalendarStore();

  const [formValues, setFormValues] = useState({
    title: "",
    notes: "",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const [validForm, setValidForm] = useState(true);
  const [formSubmitted, setformSubmitted] = useState(false);

  const titleClass = useMemo(() => {
    if (!formSubmitted) return "";
    return formValues.title.length > 0 ? "" : "is-invalid";
  }, [formValues.title, formSubmitted]);

  useEffect(() => {
    if (activeEvent !== null) {
      setFormValues({ ...activeEvent });
    }
  }, [activeEvent]);

  const onInputChange = ({ target }) => {
    const { value, name } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onDateChanged = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event,
    });
  };

  const onSaveSubmit = (e) => {
    e.preventDefault();
    setformSubmitted(true);
    const difference = differenceInSeconds(formValues.end, formValues.start);
    difference <= 0 || NaN ? setValidForm(false) : setValidForm(true);
    if (!validForm) return;

    //Enviamos el formulario.
    console.log(formValues);
    Swal.fire({
      title: "Exito",
      text: "Nuevo evento creado",
      icon: "success",
    });
  };

  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={closeDateModal}
      style={customStyles}
      contentLabel="Example Modal"
      className={"modal"}
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form onSubmit={onSaveSubmit} className="container">
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>

          <DatePicker
            locale={"es"}
            selected={formValues.start}
            onChange={(event) => {
              onDateChanged(event, "start");
            }}
            dateFormat={"Pp"}
            showTimeSelect
            timeCaption="Hora"
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker
            locale={"es"}
            minDate={formValues.start}
            selected={formValues.end}
            onChange={(event) => {
              onDateChanged(event, "end");
            }}
            dateFormat={"Pp"}
            showTimeSelect
            timeCaption="Hora"
          />
        </div>

        <div
          className="alert alert-danger"
          role="alert"
          style={{ display: !validForm ? "block" : "none" }}
        >
          {"Las fechas son incorrectas"}
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${titleClass}`}
            placeholder="Título del evento"
            autoComplete="off"
            name="title"
            value={formValues.title}
            onChange={onInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={onInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
