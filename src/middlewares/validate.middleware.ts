import type { NextFunction, Request, RequestHandler, Response } from 'express';
import { ZodError, type ZodType } from 'zod';

const validate = (
  schema: ZodType,
  source: 'body' | 'params' | 'query',
): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('validate middleware');
      console.log(req[source]);
      await schema.parseAsync(req[source]);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ ok: false, message: error.issues });
      }
      next(error);
    }
  };
};

export const validateBody = (schema: ZodType) => validate(schema, 'body');
export const validateParams = (schema: ZodType) => validate(schema, 'params');
export const validatequery = (schema: ZodType) => validate(schema, 'query');
