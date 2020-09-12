import { Field, InterfaceType } from '@nestjs/graphql';

@InterfaceType()
export default abstract class Error {
  @Field()
  message: string;
}
