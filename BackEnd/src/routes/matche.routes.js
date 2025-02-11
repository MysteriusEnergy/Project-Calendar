import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getMatches, createMatche, getMatche, updateMatche, deleteMatche } from '../controllers/matches.controller.js';
import { validerSchema } from '../middlewares/validator.middleware.js';
import { createMatchesSchame } from "../schemas/matche.schema.js";

const router = Router();

router.get('/Maches', authRequired, getMatches);

router.get('/Maches/:id', authRequired, getMatche);

router.post('/Maches', authRequired, validerSchema(createMatchesSchame), createMatche);

router.delete('/Maches/:id', authRequired, deleteMatche);

router.put('/Maches/:id', authRequired, updateMatche);

export default router;