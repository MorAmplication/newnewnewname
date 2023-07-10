import * as common from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AuthService } from "./auth.service";
import { GqlDefaultAuthGuard } from "./gqlDefaultAuth.guard";
import { UserData } from "./userData.decorator";
import { LoginArgs } from "./LoginArgs";
import { UserTestInfo } from "./UserTestInfo";

@Resolver(UserTestInfo)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => UserTestInfo)
  async login(@Args() args: LoginArgs): Promise<UserTestInfo> {
    return this.authService.login(args.credentials);
  }

  @Query(() => UserTestInfo)
  @common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
  async usertestInfo(
    @UserData() entityInfo: UserTestInfo
  ): Promise<UserTestInfo> {
    return entityInfo;
  }
}
