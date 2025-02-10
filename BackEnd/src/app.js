import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import tasksRoutes from './routes/tasks.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Permite solo el frontend de Vite
    credentials: true // Habilita el envío de cookies si es necesario
}));
app.use(morgan('dev')); // muestra un log en la consola con toda la informacion de la peticion
app.use(express.json()); // 
app.use(cookieParser());

app.use('/api', authRoutes)
app.use('/api', tasksRoutes)

export default app;