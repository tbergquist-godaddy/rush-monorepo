import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as compression from 'compression';

@Injectable()
export default class CompressionMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    const compressionFn = compression();
    compressionFn(req, res, next);
  }
}
