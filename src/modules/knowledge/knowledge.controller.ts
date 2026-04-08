import type { NextFunction, Request, Response } from 'express';

import type {
  CreateKnowledgeDTO,
  IdKnowledgeDTO,
  UpdateKnowledDTO,
} from './knowledge.schema.js';
import type { KnowledgeService } from './knowledge.service.js';

export class KnowledgeController {
  constructor(private service: KnowledgeService) {}

  destroyKnowledge = (req: Request, res: Response, next: NextFunction) => {
    const _id = req.params.id as IdKnowledgeDTO;
    if (_id) {
      try {
        this.service.destroyKnowledge(_id);
        return res.status(200).json({ ok: true, message: 'destroy knowledge' });
      } catch (error) {
        next(error);
      }
    }
  };
  editKnowledge = (req: Request, res: Response, next: NextFunction) => {
    const data = req.body as UpdateKnowledDTO;
    if (data) {
      try {
        const edit = this.service.editKnowledge(data);
        return res
          .status(200)
          .json({ ok: true, message: 'edit knowledge', edit });
      } catch (error) {
        next(error);
      }
    }
  };
  getKnowledge = (req: Request, res: Response, next: NextFunction) => {
    try {
      const list = this.service.listKnowledge();
      return res
        .status(200)
        .json({ ok: true, message: 'list of knowledge', data: list });
    } catch (error) {
      next(error);
    }
  };
  postKnowledge = (req: Request, res: Response, next: NextFunction) => {
    const data = req.body as CreateKnowledgeDTO;
    if (data) {
      try {
        const newKnowledge = this.service.createKnowledge(data);

        return res
          .status(201)
          .json({ ok: true, message: 'new knowledge', data: newKnowledge });
      } catch (error) {
        next(error);
      }
    }
  };
}
