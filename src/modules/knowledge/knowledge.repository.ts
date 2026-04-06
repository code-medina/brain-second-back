import crypto from 'node:crypto';
export interface KnowledgeRepository {
  create({ title, content }: { title: string; content: string }): {
    _id: string;
    title: string;
    content: string;
    createdAt: Date;
  };
}
export class KnowledgeMemoryRepository implements KnowledgeRepository {
    
  create({ title, content }: { title: string; content: string }): {
    _id: string;
    title: string;
    content: string;
    createdAt: Date;
  } {
    const _id = crypto.randomUUID();
    const createdAt = new Date();
    return { _id, title, content, createdAt };
  }
}
