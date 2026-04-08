import type { IdeaRepository } from './idea.repository.js';
import type { IdIdea, UpdateIdeaDTO } from './idea.schema.js';

export class IdeaService {
  private repository: IdeaRepository;
  constructor(repo: IdeaRepository) {
    this.repository = repo;
  }

  async destroyIdea(_id: IdIdea) {
    return await this.repository.destroy(_id);
  }
  async editIdea(idea: UpdateIdeaDTO) {
    return await this.repository.edit(idea);
  }
  async listIdeas() {
    return await this.repository.list();
  }
  async createIdea({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) {
    if (!title || !description) {
      throw new Error('title and description are required');
    }

    const newIdea = await this.repository.create({ title, description });
    return newIdea;
  }
}
