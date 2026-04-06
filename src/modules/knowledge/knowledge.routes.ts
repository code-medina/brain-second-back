import { Router } from 'express';

import { KnowledgeController } from './knowledge.controller.js';
export const knowledgeRouter = Router();
const controller=new KnowledgeController();
knowledgeRouter.post('/knowledge', controller.postKnowledge);
