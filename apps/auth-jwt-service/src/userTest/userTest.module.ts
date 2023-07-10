import { Module } from "@nestjs/common";
import { UserTestModuleBase } from "./base/userTest.module.base";
import { UserTestService } from "./userTest.service";
import { UserTestController } from "./userTest.controller";
import { UserTestResolver } from "./userTest.resolver";

@Module({
  imports: [UserTestModuleBase],
  controllers: [UserTestController],
  providers: [UserTestService, UserTestResolver],
  exports: [UserTestService],
})
export class UserTestModule {}
