import crypto from 'node:crypto';

import type { CreateKnowledgeDTO, Knowledge } from './knowledge.schema.js';
export interface KnowledgeRepository {
  create({ title, content }: CreateKnowledgeDTO): Knowledge;
}
export class KnowledgeMemoryRepository implements KnowledgeRepository {
  create({ title, content }: CreateKnowledgeDTO): Knowledge {
    const _id = crypto.randomUUID();
    const createdAt = new Date().toISOString();
    return { _id, title, content, createdAt };
  }
}
