import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as morgan from 'morgan';

@Injectable()
export default class MorganMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    const logger = morgan('dev');
    logger(req, res, next);
  }
}
