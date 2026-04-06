import type { Request, Response } from 'express';

export class KnowledgeController {
  postKnowledge = (req: Request, res: Response) => {
    const { title, content } = req.body as { title: string; content: string };
    if (!title || !content || title.trim() === '' || content.trim() === '') {
      return res.status(400).json({ ok: false, message: 'invalid input' });
    }
    return res.status(201).json({ok:true,message:"new knowledge",data:{title,content}})
  };
}
