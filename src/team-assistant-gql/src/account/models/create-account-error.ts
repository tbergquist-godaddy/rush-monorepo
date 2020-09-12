import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';

import ErrorInterface from '../../common/error-interface';

type CreateError = {
  code: number;
  message: string;
};

/* eslint-disable no-unused-vars */
enum ErrorReasons {
  EMAIL_EXISTS,
  UNKNOWN,
  INVALID_EMAIL,
  MISSING_PASSWORD,
}
registerEnumType(ErrorReasons, {
  name: 'CreateAccountErrorReason',
});
/* eslint-enable no-unused-vars */

@ObjectType({
  implements: [ErrorInterface],
})
export default class CreateAccountError implements ErrorInterface {
  constructor(e?: CreateError) {
    if (e !== undefined) {
      if (e.code === 11000) {
        this.reason = 0;
      } else {
        this.reason = 1;
      }
      this.message = e.message;
    }
  }

  @Field()
  message: string;

  @Field(() => ErrorReasons)
  reason: ErrorReasons;
}
