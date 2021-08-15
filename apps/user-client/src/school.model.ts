import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class SchoolModel {
  @Field((type) => String)
  name: string;

  @Field((type) => Int)
  status: number;
}
