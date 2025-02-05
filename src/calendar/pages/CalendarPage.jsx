import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns'
// import esES from 'date-fns/locale/es'

import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, Navbar } from "../"
import { localizer, getMessagesES } from '../../helpers'
import { useState } from 'react'
import { useCalendarStore, useUiStore } from '../../hooks'

// const events = [{
//   title: 'Cumpleaños de Paco',
//   notes: 'Comprar Galletas',
//   start: new Date(),
//   end: addHours(new Date(), 2),
//   bgcolor: '#fafafa',
//   user: {
//     _id: '123',
//     name: 'Mario'
//   }
// }]

export const CalendarPage = () => {

  const { openDateModal  } = useUiStore();
  const { events, setActiveEvent } = useCalendarStore();

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')  // Es como un recuerdo, un gancho para recordar el estado anterior

  const eventStyleGetter = (event, star, end, isSelected) => {

    const style = {
      backgroundColor: '#000',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }
  
    return {
      style
    }
  }

  const onDoubleClick = () => {
      // console.log({ doubleClick: event });
      openDateModal();
  }

  const onSelect = (event) => {
    // console.log({ click: event});
    setActiveEvent(event)
    
  }

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event)  
    setLastView(event)  
  }

  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px )' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={
          {
            event: CalendarEvent
          }
        }
        onDoubleClickEvent = {onDoubleClick}
        onSelectEvent = {onSelect}
        onView={onViewChanged}
        
      />

      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  )

}


