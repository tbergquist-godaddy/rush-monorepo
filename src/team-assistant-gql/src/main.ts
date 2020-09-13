import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app-module';
import connection from './database/connection';

const uri = process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017/team_assistant';
connection.openUri(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT || 3000);
  // eslint-disable-next-line no-console
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
