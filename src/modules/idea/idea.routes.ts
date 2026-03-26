import { Router } from 'express';

import { ideaController } from './idea.module.js';

export const ideaRoutes = Router();

ideaRoutes.post('/ideas', ideaController.postIdea);
