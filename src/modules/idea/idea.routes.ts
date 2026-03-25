import { Router } from 'express';

import { IdeaController } from "./idea.controller.js";
import { IdeaService } from "./idea.service.js";

export const ideaRoutes = Router();

const service=new IdeaService()
const controller=new IdeaController(service);

ideaRoutes.post('/ideas', controller.postIdea);
