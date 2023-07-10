import * as common from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AuthService } from "./auth.service";
import { GqlDefaultAuthGuard } from "./gqlDefaultAuth.guard";
import { UserData } from "./userData.decorator";
import { LoginArgs } from "./LoginArgs";
import { VikaInfo } from "./VikaInfo";

@Resolver(VikaInfo)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => VikaInfo)
  async login(@Args() args: LoginArgs): Promise<VikaInfo> {
    return this.authService.login(args.credentials);
  }

  @Query(() => VikaInfo)
  @common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
  async vikaInfo(@UserData() entityInfo: VikaInfo): Promise<VikaInfo> {
    return entityInfo;
  }
}
