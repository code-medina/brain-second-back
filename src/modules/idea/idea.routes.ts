import { Router } from 'express';

import { ideaController } from './idea.module.js';


export const ideaRoutes = Router();

ideaRoutes.post('/ideas', ideaController.postIdea);
ideaRoutes.get('/ideas',ideaController.getIdeas);
ideaRoutes.put("/ideas/:id",ideaController.editIdea)