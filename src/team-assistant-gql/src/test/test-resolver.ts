import { Args, Query, Resolver } from '@nestjs/graphql';

import { Test } from './test-model';

@Resolver(() => Test)
export class TestResolver {
  @Query(() => Test)
  test(@Args('id') id: string): Test {
    return {
      id,
      firstName: 'Tito',
      lastName: 'Bonito',
    };
  }
}
