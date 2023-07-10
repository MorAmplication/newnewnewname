import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserTestService } from "./userTest.service";
import { UserTestControllerBase } from "./base/userTest.controller.base";

@swagger.ApiTags("userTests")
@common.Controller("userTests")
export class UserTestController extends UserTestControllerBase {
  constructor(
    protected readonly service: UserTestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
