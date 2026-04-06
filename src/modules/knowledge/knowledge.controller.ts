import type { Request, Response } from 'express';

import type { KnowledgeService } from './knowledge.service.js';

export class KnowledgeController {
  constructor(private service: KnowledgeService) {}
  postKnowledge = (req: Request, res: Response) => {
    const { title, content } = req.body as { title: string; content: string };
    if (!title || !content || title.trim() === '' || content.trim() === '') {
      return res.status(400).json({ ok: false, message: 'invalid input' });
    }
    const newKnowledge = this.service.createKnowledge({ title, content });
    return res
      .status(201)
      .json({ ok: true, message: 'new knowledge', data: newKnowledge });
  };
}
