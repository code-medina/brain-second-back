import crypto from 'node:crypto';

import type {
  CreateIdeaDTO,
  Idea,
  IdIdea,
  UpdateIdeaDTO,
} from './idea.schema.js';

export interface IdeaRepository {
  destroy(id: IdIdea): Promise<void>;

  edit(idea: UpdateIdeaDTO): Promise<Idea>;

  list(): Promise<Idea[]>;
  create({ title, description }: CreateIdeaDTO): Promise<Idea>;
}

export class IdeaMemoryRepositiry implements IdeaRepository {
  private ideas: Idea[] = [];

  async destroy(id: IdIdea): Promise<void> {
    const index = this.ideas.findIndex((i) => i._id === id);
    if (index === -1) {
      throw new Error('not found idea : ' + id);
    }
    console.log('delete', this.ideas.splice(index, 1));
  }

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
    const newIdea = {
      _id,
      title,
      description,
      createdAt: createdAt.toISOString(),
    };
    this.ideas.push(newIdea);

    return newIdea;
  }
}
