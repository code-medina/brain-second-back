import crypto from "node:crypto";

import type { Idea } from "./idea.schema.js";

export interface IdeaRepository {
  list():Promise<Idea[]>
  create({
    title,
    description,
  }: {
    title: string;
    description: string;
  }): Promise<{
    _id: string;
    title: string;
    description: string;
    createdAt: Date;
  }>;
}

export class IdeaMemoryRepositiry implements IdeaRepository{

    private ideas:Idea[]=[];

    async list()
    {
      return this.ideas;

    }
    async create({ title, description, }: {
        title: string;
        description: string;
    }): Promise<{
        _id: string;
        title: string;
        description: string;
        createdAt: Date;
    }> {

        const _id=crypto.randomUUID();
        const createdAt=new Date();
        const newIdea={_id,title,description};
         this.ideas.push({...newIdea,createdAt:createdAt.toISOString()})
    
      return {...newIdea,createdAt};
    }
}