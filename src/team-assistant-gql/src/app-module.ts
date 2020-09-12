import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { TestModule } from './test/test-module';
import AccountModule from './account/account-module';

@Module({
  imports: [
    AccountModule,
    TestModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
  ],
})
export class AppModule {}
