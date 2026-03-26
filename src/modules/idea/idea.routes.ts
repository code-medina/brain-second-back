import { Router } from 'express';

import { IdeaMemoryRepositiry } from './idea-memory.repository.js';
import { IdeaController } from "./idea.controller.js";
import { IdeaService } from "./idea.service.js";

export const ideaRoutes = Router();
const repo=new IdeaMemoryRepositiry()
const service=new IdeaService(repo);
const controller=new IdeaController(service);

ideaRoutes.post('/ideas', controller.postIdea);
