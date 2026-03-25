import crypto from "node:crypto";

import { Router } from 'express';

export const ideaRoutes = Router();

ideaRoutes.post('/ideas', (req, res, next) => {
  console.log('idea');
  const _id=crypto.randomUUID();
  const { title, description } = req.body as {
    title: string;
    description: string;
  };

  if (!title) return next(new Error('title is required'));

  const newIdea = { _id, title, description ,createdAt:new Date().toISOString()};

  res.json({ message: 'create idea successfully', data: newIdea });
});
