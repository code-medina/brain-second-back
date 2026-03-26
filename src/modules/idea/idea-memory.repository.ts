import crypto from "node:crypto";
export interface IdeaRepository {
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

    private ideas:any[]=[];

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
        const newIdea={_id,title,description,createdAt};
         this.ideas.push(newIdea)
    
      return newIdea;
    }
}