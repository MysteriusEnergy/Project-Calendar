import { useDispatch, useSelector } from "react-redux"
import { onSetActiveEvent } from "../store";

export const useCalendarStore = () => {

    const dispatch = useDispatch(); // Hook de Redux para despachar acciones
    const { events, activeEvent } = useSelector(state => state.calendar) // Hook de Redux para seleccionar el estado

    const setActiveEvent = (calendarEvent) => {
      dispatch(onSetActiveEvent(calendarEvent))


    }
    
  return {
    //!Propiedades
    events,
    activeEvent,


    //!Métodos
    setActiveEvent

  }

}
