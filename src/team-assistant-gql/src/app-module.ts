import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { TestModule } from './test/test-module';
import AccountModule from './account/account-module';
import MorganMiddleware from './middleware/morgan';
import CorsMiddleware from './middleware/cors';

@Module({
  imports: [
    AccountModule,
    TestModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      playground: true,
      introspection: true,
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MorganMiddleware).forRoutes('graphql');
    consumer.apply(CorsMiddleware).forRoutes('graphql');
  }
}
