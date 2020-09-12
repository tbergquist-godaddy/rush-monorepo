import { Module } from '@nestjs/common';

import CreateAccountResolver from './account-resolver';
import IdentityResolver from './identity-resolver';

@Module({
  providers: [CreateAccountResolver, IdentityResolver],
})
export default class AccountModule {}
