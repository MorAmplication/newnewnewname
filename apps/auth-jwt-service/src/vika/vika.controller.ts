import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VikaService } from "./vika.service";
import { VikaControllerBase } from "./base/vika.controller.base";

@swagger.ApiTags("vikas")
@common.Controller("vikas")
export class VikaController extends VikaControllerBase {
  constructor(
    protected readonly service: VikaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
