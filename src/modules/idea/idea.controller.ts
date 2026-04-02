import type { Request, Response, NextFunction } from 'express';

import type { CreateIdeaDTO, UpdateIdeaDTO } from './idea.schema.js';
import type { IdeaService } from './idea.service.js';

export class IdeaController {
  private service: IdeaService;
  constructor(service: IdeaService) {
    this.service = service;
  }

  destroyIdea = async (req: Request, res: Response, next: NextFunction) => {
    const _id = req.params.id;
    return res
      .status(200)
      .json({ ok: true, message: 'delete successfully', data: _id });
  };
  editIdea = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body as UpdateIdeaDTO;
      const edit = await this.service.editIdea(data);
      return res.status(200).json({
        ok: true,
        message: 'edit idea',
        data: edit,
      });
    } catch (error) {
      console.log('error');
      next(error);
    }
  };
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
      /* const validData = CreateIdeaSchema.safeParse(req.body);
      if (!validData.success) {
        return res.status(400).json({
          message: 'invalid input to create idea',
          ok: false,
          data: validData.error.issues,
        });
      }
 */
      const data = req.body as CreateIdeaDTO;
      if (data) {
        const newIdea = await this.service.createIdea(data);
        return res.status(201).json({
          message: 'Created idea successfully',
          ok: true,
          data: newIdea,
        });
      }
    } catch (error) {
      next(error);
    }
  };
}
