import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export default class Login {
  @Field({ nullable: true })
  token?: string;
}
