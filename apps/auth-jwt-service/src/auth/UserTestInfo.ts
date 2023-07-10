import { Field, ObjectType } from "@nestjs/graphql";
import { UserTest } from "../usertest/base/UserTest";

@ObjectType()
export class UserTestInfo implements Partial<UserTest> {
  @Field(() => String)
  id!: string;
  @Field(() => String)
  username!: string;
  @Field(() => [String])
  roles!: string[];
  @Field(() => String, { nullable: true })
  accessToken?: string;
}
