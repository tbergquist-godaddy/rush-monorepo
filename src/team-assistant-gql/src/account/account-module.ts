import { Module } from '@nestjs/common';

import CreateAccountResolver from './create-account-resolver';
import IdentityResolver from './identity-resolver';

@Module({
  providers: [CreateAccountResolver, IdentityResolver],
})
export default class AccountModule {}
