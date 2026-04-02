import { Router } from 'express';

import { ideaController } from './idea.module.js';
import { CreateIdeaSchema, IdIdeaSchema, UpdateIdeaSchema } from './idea.schema.js';
import { validateBody, validateParams } from '../../middlewares/validate.middleware.js';

export const ideaRoutes = Router();

ideaRoutes.post(
  '/ideas',
  validateBody(CreateIdeaSchema),
  ideaController.postIdea,
);
ideaRoutes.get('/ideas', ideaController.getIdeas);
ideaRoutes.put(
  '/ideas',
  validateBody(UpdateIdeaSchema),
  ideaController.editIdea,
);
ideaRoutes.delete('/ideas/:id',validateParams(IdIdeaSchema),ideaController.destroyIdea);
