import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

// import { uiSlice } from '../ui/uiSlice';
// import { act } from 'react';

const tempEvent = {
    _id: new Date().getTime(),
    title: 'Cumpleaños de Paco',
    notes: 'Comprar Galletas',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgcolor: '#fafafa',
    user: {
        _id: '123',
        name: 'Mario'
    }
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [tempEvent], // Estado inicial de los eventos
        activeEvent: null // Evento activo en el calendario 
    },
    reducers: {
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, { payload }) => {
            state.events.push(payload)
            state.activeEvent = null;
        },
        onUpdateEvent: (state, { payload }) => {
            state.events = state.events.map(event => {
                if (event._id === payload._id) {
                    return payload; // Nuevo evento
                }
                return event;
            })
        },
        onDeleteEvent: ( state ) => {
            if(state.activeEvent) {
            state.events = state.events.filter(event => event._id !== state.activeEvent._id);
            state.activeEvent = null;
            }
        }
    }
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions; 

