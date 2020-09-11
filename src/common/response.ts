import { ExpressJoiError } from 'express-joi-validation';
import express from 'express';
import { ContainerTypes } from './containerTypes';

export function response(
  err: any | ExpressJoiError,
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction
): void {
  if (err && Object.values(ContainerTypes).includes(err.type)) {
    const e: ExpressJoiError = err;
    res.status(400).json(e);
  } else {
    res.status(500).end(err);
  }
}
