import { addHours, differenceInSeconds } from 'date-fns'
import { useEffect, useMemo, useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import Modal from 'react-modal';

import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from 'date-fns/locale/es';
import { useCalendarStore, useUiStore } from '../../hooks';

registerLocale('es', es)


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    zIndex: 4,
  }
};

Modal.setAppElement('#root');


export const CalendarModal = () => {

  
  const { isDateModalOpen, closeDateModal } = useUiStore();
  const {activeEvent, startSavingEvent} = useCalendarStore()

  const [formSubmitted, setFormSubmitted] = useState(false);
  // const [isOpen, setIsOpen] = useState(true);

  const [formValues, setFormValues] = useState({
    title: 'Mario',
    notes: '¡Evento mágico de magia pura!',
    start: new Date(),
    end: addHours( new Date(), 2)
  })

  const titleClass = useMemo(() => {
    if(!formSubmitted) return '';

    return (formValues.title.length > 0) 
    ? 'is-valid' 
    : 'is-invalid';

  }, [formValues.title, formSubmitted])

  useEffect(() => {
    // Lo que pasa primero, cuando algo cambie o cuando todo este listo
    if(activeEvent !== null) {
      setFormValues({...activeEvent})
      
    }

  }, [activeEvent]) // Dependencias que se deben cumplir para que se ejecute el useEffect (Lista de dependencias)
  


  const onInputChanged = ({target}) => {
    setFormValues({
      ...formValues, // Mantiene los valores actuales
      [target.name] : target.value // Actualiza el campo que cambio
    })
    
  }

  const onDateChanged = (event, changing) => {
    setFormValues({
      ...formValues, // Mantiene los valores actuales
      [changing] : event// Actualiza el campo que cambio
    })

  }

  const onSubmit = async(event) => {
    event.preventDefault(); // Evita que se recargue la página
    setFormSubmitted(true);
    const difference = differenceInSeconds(formValues.end, formValues.start)

    if (isNaN(difference) || difference <= 0) {
      console.log('Fechas incorrectas');
      
      Swal.fire('Fechas Incorrectas mi papacho', 'Revisar las fechas', 'error');

      return;
    }

    if (formValues.title.length <= 0) return;


      // TODO
    await startSavingEvent(formValues);
    closeDateModal();
    setFormSubmitted(false);

  }

  return ( 
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={closeDateModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={100}
    >

      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={onSubmit}>

        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker
            selected={formValues.start}
            onChange={(event) => onDateChanged(event, 'start')}
            className='form-control'
            dateFormat={"dd/MM/yyyy h:mm aa"}
            wrapperClassName='form-control'
            showTimeSelect
            locale='es'
            timeCaption='Hora'
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker
          // minDate={formValues.start}
            selected={formValues.end}
            onChange={(event) => onDateChanged(event, 'end')}
            className='form-control'
            dateFormat={"dd/MM/yyyy h:mm aa"}
            wrapperClassName='form-control'
            showTimeSelect
            locale='es'
            timeCaption='Hora'
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${titleClass} `}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChanged}
            
          />
          <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={onInputChanged}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">Información adicional</small>
        </div>

        <button
          type="submit"
          className="btn btn-outline-primary btn-block"
        >
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>

      </form>

    </Modal>
  )
}
