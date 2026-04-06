
import type { KnowledgeRepository } from './knowledge.repository.js';
export class KnowledgeService {
  constructor(private repo: KnowledgeRepository) {}
  createKnowledge({ title, content }: { title: string; content: string }) {
    const newKnowledge = this.repo.create({ title, content });
    return newKnowledge;
  }
}
