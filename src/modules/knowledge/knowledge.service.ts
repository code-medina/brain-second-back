import type { KnowledgeRepository } from './knowledge.repository.js';
import type {
  CreateKnowledgeDTO,
  Knowledge,
  UpdateKnowledDTO,
} from './knowledge.schema.js';
export class KnowledgeService {
  constructor(private repo: KnowledgeRepository) {}
  destroyKnowledge(id: string) {
    console.log(id);
    this.repo.destroy({ id });
  }
  createKnowledge({ title, content }: CreateKnowledgeDTO): Knowledge {
    const newKnowledge = this.repo.create({ title, content });
    return newKnowledge;
  }
  listKnowledge(): Knowledge[] {
    return this.repo.list();
  }
  editKnowledge({ _id, title, content }: UpdateKnowledDTO): Knowledge {
    return this.repo.edit({ _id, title, content });
  }
}
