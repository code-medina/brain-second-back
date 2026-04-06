import { Router } from 'express';

import { KnowledgeController } from './knowledge.controller.js';
import { KnowledgeMemoryRepository } from './knowledge.repository.js';
import { KnowledgeService } from './knowledge.service.js';

export const knowledgeRouter = Router();
const repository = new KnowledgeMemoryRepository();
const service = new KnowledgeService(repository);
const controller = new KnowledgeController(service);
knowledgeRouter.post('/knowledge', controller.postKnowledge);
