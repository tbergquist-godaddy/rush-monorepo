import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { toGlobalId } from '@adeira/graphql-global-id';

import Identity from './models/identity';

@Resolver(() => Identity)
export default class IdentityResolver {
  @ResolveField()
  id(@Parent() identity: Identity) {
    return toGlobalId('Identity', identity.id);
  }
}
