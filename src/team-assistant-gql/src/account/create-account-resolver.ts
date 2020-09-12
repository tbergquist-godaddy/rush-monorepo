import { Args, Resolver, Mutation } from '@nestjs/graphql';

import CreateAccountResponse from './models/create-account-response';
import Identity from './models/identity';
import CreateAccountError from './models/create-account-error';
import UserModel, { IUser } from '../database/models/users';

// eslint-disable-next-line no-control-regex
const emailRexEx = /(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

@Resolver(() => CreateAccountResponse)
export default class CreateAccountResolver {
  @Mutation(() => CreateAccountResponse)
  async createAccount(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<typeof CreateAccountResponse> {
    if (!emailRexEx.test(email)) {
      const error = new CreateAccountError();
      error.reason = 2;
      error.message = `${email} is not a valid email address`;
      return error;
    }
    if (password === '') {
      const error = new CreateAccountError();
      error.reason = 3;
      error.message = 'Password is mandatory';
      return error;
    }

    try {
      const user: IUser = await (<any>UserModel).createUser({ email, password });
      const identity = new Identity(user);

      return identity;
    } catch (e) {
      const error = new CreateAccountError(e);
      error.message = e.message;
      return error;
    }
  }
}
