import type { KnowledgeRepository } from './knowledge.repository.js';
import type { CreateKnowledgeDTO, Knowledge } from './knowledge.schema.js';
export class KnowledgeService {
  constructor(private repo: KnowledgeRepository) {}
  createKnowledge({ title, content }: CreateKnowledgeDTO): Knowledge {
    const newKnowledge = this.repo.create({ title, content });
    return newKnowledge;
  }
}
