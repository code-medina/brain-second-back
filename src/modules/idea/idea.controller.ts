import type { Request, Response, NextFunction } from 'express';

import { CreateIdeaSchema } from './idea.schema.js';
import type { IdeaService } from './idea.service.js';

export class IdeaController {
  private service: IdeaService;
  constructor(service: IdeaService) {
    this.service = service;
  }
  getIdeas = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const list = await this.service.listIdeas();
      return res
        .status(200)
        .json({ message: 'list of ideas', ok: true, data: list });
    } catch (error) {
      next(error);
    }
  };
  postIdea = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validData = CreateIdeaSchema.safeParse(req.body);
      if (!validData.success) {
        return res.status(400).json({
          message: 'invalid input to create idea',
          ok: false,
          data: validData.error.issues,
        });
      }

      const newIdea = await this.service.createIdea(validData.data);
      return res.status(201).json({
        message: 'Created idea successfully',
        ok: true,
        data: newIdea,
      });
    } catch (error) {
      next(error);
    }
  };
}
