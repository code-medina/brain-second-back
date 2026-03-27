import crypto from 'node:crypto';

import type { CreateIdeaDTO, Idea, UpdateIdeaDTO } from './idea.schema.js';

export interface IdeaRepository {
  edit(idea: UpdateIdeaDTO): Promise<Idea>;

  list(): Promise<Idea[]>;
  create({
    title,
    description,
  }: CreateIdeaDTO): Promise<Idea>;
}

export class IdeaMemoryRepositiry implements IdeaRepository {
  private ideas: Idea[] = [];
  
  async edit(idea: UpdateIdeaDTO): Promise<Idea> {
    const index = this.ideas.findIndex((idea) => idea._id === idea._id);
    if (index !== -1) {
      let edit = this.ideas[index];

      if (edit) {
        edit = {
          ...edit,
          description: idea.description || edit.description,
          title: idea.title || edit.title,
        };
        return edit;
      }
    }
    throw new Error('Not Found Idea');
  }

  async list() {
    return this.ideas;
  }
  async create({
    title,
    description,
  }: {
    title: string;
    description: string;
  }): Promise<Idea> {
    const _id = crypto.randomUUID();
    const createdAt = new Date();
    const newIdea = { _id, title, description,createdAt:createdAt.toISOString() };
    this.ideas.push(newIdea);

    return newIdea;
  }
}
