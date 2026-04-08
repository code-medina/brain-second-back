import crypto from 'node:crypto';

import type {
  CreateKnowledgeDTO,
  IdKnowledgeDTO,
  Knowledge,
  UpdateKnowledDTO,
} from './knowledge.schema.js';
export interface KnowledgeRepository {
  list(): Knowledge[];
  create({ title, content }: CreateKnowledgeDTO): Knowledge;
  edit({ _id, title, content }: UpdateKnowledDTO): Knowledge;
  destroy(id: IdKnowledgeDTO): void;
}
export class KnowledgeMemoryRepository implements KnowledgeRepository {
  private array: Knowledge[] = [];
  destroy(id: IdKnowledgeDTO): void {
    const arrayFiler = this.array.filter((k) => k._id !== id.id);
    if (this.array.length !== arrayFiler.length) {
      this.array = arrayFiler;
    }
  }
  edit({ _id, title, content }: UpdateKnowledDTO): Knowledge {
    const index = this.array.findIndex((k) => k._id === _id);
    if (index === -1 || !this.array[index]) {
      console.log(index);
      throw new Error('Not Found knowledge');
    }
    this.array[index] = {
      _id,
      title: title || this.array[index].title,
      content: content || this.array[index].content,
      createdAt: this.array[index].createdAt,
    };
    return this.array[index];
  }
  create({ title, content }: CreateKnowledgeDTO): Knowledge {
    const _id = crypto.randomUUID();
    const createdAt = new Date().toISOString();
    this.array.push({ _id, title, content, createdAt });
    return { _id, title, content, createdAt };
  }
  list(): Knowledge[] {
    return [...this.array];
  }
}
