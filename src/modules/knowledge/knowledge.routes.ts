import { Router } from 'express';

import { KnowledgeController } from './knowledge.controller.js';
import { KnowledgeMemoryRepository } from './knowledge.repository.js';
import {
  CreateKnowledgeSchema,
  IdKnowledgeSchema,
  UpdateKnowledgeSchema,
} from './knowledge.schema.js';
import { KnowledgeService } from './knowledge.service.js';
import {
  validateBody,
  validateParams,
} from '../../middlewares/validate.middleware.js';

export const knowledgeRouter = Router();
const repository = new KnowledgeMemoryRepository();
const service = new KnowledgeService(repository);
const controller = new KnowledgeController(service);

knowledgeRouter.post(
  '/knowledge',
  validateBody(CreateKnowledgeSchema),
  controller.postKnowledge,
);
knowledgeRouter.get('/knowledge', controller.getKnowledge);
knowledgeRouter.put(
  '/knowledge',
  validateBody(UpdateKnowledgeSchema),
  controller.editKnowledge,
);
knowledgeRouter.delete(
  '/knowledge/:id',
  validateParams(IdKnowledgeSchema),
  controller.destroyKnowledge,
);
