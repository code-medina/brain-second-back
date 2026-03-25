import crypto from 'node:crypto';
export class IdeaService {

   createIdea({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) {
    const _id = crypto.randomUUID();
    const createdAt = new Date().toISOString();
    if (!title || !description) {
      throw new Error('title and description are required');
    }

    const newIdea = { _id, title, description, createdAt };
    return newIdea;
  }
}
