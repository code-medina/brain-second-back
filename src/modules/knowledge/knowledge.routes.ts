import { Router } from 'express';

import { KnowledgeController } from './knowledge.controller.js';
import { KnowledgeService } from './knowledge.service.js';
export const knowledgeRouter = Router();
const service = new KnowledgeService();
const controller = new KnowledgeController(service);
knowledgeRouter.post('/knowledge', controller.postKnowledge);
