import { IdeaMemoryRepositiry } from './idea.repository.js';
import { IdeaController } from './idea.controller.js';
import { IdeaService } from './idea.service.js';

const repo = new IdeaMemoryRepositiry();
const service = new IdeaService(repo);
const ideaController = new IdeaController(service);

export { ideaController };
