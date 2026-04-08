import type { Response, Request, NextFunction } from 'express';
interface CustomError extends Error {
  status?: number;
}
export function globalErrorMiddleware(
  error: CustomError,
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  console.log(error.stack);
  const status = error.status || 500;
  const message = error.message || ' unexpected error';
  return res.status(status).json({ ok: false, message });
}
