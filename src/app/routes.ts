import { Router } from 'express';

import { ideaRoutes } from '../modules/idea/idea.routes.js';
import { knowledgeRouter } from '../modules/knowledge/knowledge.routes.js';

const router = Router();

console.log('routes');
router.use('/api/v1', ideaRoutes);
router.use("/api/v1",knowledgeRouter);
export default router;
