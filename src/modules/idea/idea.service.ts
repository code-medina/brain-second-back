
import type { IdeaRepository } from './idea-memory.repository.js';


export class IdeaService {

  private repository:IdeaRepository;
  constructor(repo:IdeaRepository)
  {
    this.repository=repo;
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

    const newIdea = await this.repository.create({title,description});
    return newIdea;
  }
}
