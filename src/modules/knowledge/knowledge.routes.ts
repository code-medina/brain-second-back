import { Router } from 'express';
export const knowledgeRouter = Router();
knowledgeRouter.post('/knowledge', (req, res) => {
  //zob validate
  const { content, title } = req.body as { title: string; content: string };
  if (content && content.trim() !== '' && title && title.trim() !== '') {
    return res
      .status(201)
      .json({ ok: true, message: 'new knowledge', data: { title, content } });
  }
  return res.status(400).json({ok:false,message: "invali inputs "})
});
