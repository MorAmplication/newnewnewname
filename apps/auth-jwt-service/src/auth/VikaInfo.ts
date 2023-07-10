import { Field, ObjectType } from "@nestjs/graphql";
import { Vika } from "../vika/base/Vika";

@ObjectType()
export class VikaInfo implements Partial<Vika> {
  @Field(() => String)
  id!: string;
  @Field(() => String)
  username!: string;
  @Field(() => [String])
  roles!: string[];
  @Field(() => String, { nullable: true })
  accessToken?: string;
}
