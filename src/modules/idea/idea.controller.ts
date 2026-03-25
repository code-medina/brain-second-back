import type { Request, Response, NextFunction } from 'express';

import type { IdeaService } from './idea.service.js';


export class IdeaController {
  service: IdeaService;
  constructor(service: IdeaService) {
    this.service = service;
  }
  postIdea = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { title, description } = req.body as {
        title: string;
        description: string;
      };
      const newIdea = this.service.createIdea({ title, description });
      return res
        .status(201)
        .json({
          message: 'Creited idea successfully',
          ok: true,
          data: newIdea,
        });
    } catch (error) {
      next(error);
    }
  };
}
