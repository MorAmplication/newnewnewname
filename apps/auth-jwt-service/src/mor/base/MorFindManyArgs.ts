/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MorWhereInput } from "./MorWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MorOrderByInput } from "./MorOrderByInput";

@ArgsType()
class MorFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MorWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MorWhereInput, { nullable: true })
  @Type(() => MorWhereInput)
  where?: MorWhereInput;

  @ApiProperty({
    required: false,
    type: [MorOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MorOrderByInput], { nullable: true })
  @Type(() => MorOrderByInput)
  orderBy?: Array<MorOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MorFindManyArgs as MorFindManyArgs };
