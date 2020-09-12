import { createUnionType } from '@nestjs/graphql';

import CreateAccountError from './create-account-error';
import Identity from './identity';

export default createUnionType({
  name: 'CreateAccountResponse',
  types: () => [CreateAccountError, Identity],
});
