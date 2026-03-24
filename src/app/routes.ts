import { Router } from 'express';

import { ideaRoutes } from '../modules/idea/idea.routes.js';

const router = Router();

console.log('routes');
router.use('/api/v1', ideaRoutes);

export default router;
