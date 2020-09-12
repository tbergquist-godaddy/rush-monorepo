import { ObjectType, Field, ID } from '@nestjs/graphql';

import { IUser } from '../../database/models/users';

@ObjectType()
export default class Identity {
  constructor(user: IUser) {
    this.id = user._id;
    this.email = user.email;
  }

  @Field(() => ID)
  id: string;

  @Field()
  email: string;
}
