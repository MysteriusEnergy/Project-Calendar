import { configureStore } from '@reduxjs/toolkit'; // Importa la función configureStore de Redux Toolkit
import { uiSlice } from './ui/uiSlice'; // Importa el slice uiSlice
import { calendarSlice } from './calendar/calendarSlice';

export const store = configureStore({
    reducer: { // Maneja el estado global de la aplicación
        ui: uiSlice.reducer,
        calendar: calendarSlice.reducer
    }



}); // Crea la store de Redux