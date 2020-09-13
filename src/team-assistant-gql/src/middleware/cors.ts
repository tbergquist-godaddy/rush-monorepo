import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as cors from 'cors';

@Injectable()
export default class CorsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const corsFn = cors({ methods: ['GET', 'POST'] });
    corsFn(req, res, next);
  }
}
