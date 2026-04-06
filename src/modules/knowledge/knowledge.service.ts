import crypto from 'node:crypto';
export class KnowledgeService {
  createKnowledge({ title, content }: { title: string; content: string }) {
    const _id = crypto.randomUUID();
    const createdAt = new Date();
    const newKnowledge = { _id, title, content, createdAt };
    return newKnowledge;
  }
}
