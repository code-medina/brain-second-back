import { Router } from 'express';

export const ideaRoutes = Router();

ideaRoutes.post('/ideas', (req, res, next) => {
  console.log('idea');
  const { title, description } = req.body as {
    title: string;
    description: string;
  };

  if (!title) return next(new Error('title is required'));

  const newIdea = { id: '1', title, description };

  res.json({ message: 'create idea successfully', data: newIdea });
});
