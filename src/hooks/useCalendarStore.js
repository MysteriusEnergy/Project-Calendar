import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";

export const useCalendarStore = () => {

    const dispatch = useDispatch(); // Hook de Redux para despachar acciones
    const { events, activeEvent } = useSelector(state => state.calendar) // Hook de Redux para seleccionar el estado

    const setActiveEvent = (calendarEvent) => {
      dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async(calendarEvent) => {
      // TODO: Llegar al backend 

      // Todo bien
      if(calendarEvent._id){
        // Actualizando
        dispatch(onUpdateEvent({...calendarEvent}))
      }else {
        // Creando
        dispatch(onAddNewEvent({...calendarEvent, _id: new Date().getTime()}))
      }
    }

    const startDeletingEvent = () => {
      // TODO: Llegar al backend
      dispatch(onDeleteEvent());

    }
    
  return {
    //!Propiedades
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    //!Métodos
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent

  }

}
