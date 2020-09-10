import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Test {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field({ nullable: true })
  lastName?: string;
}
