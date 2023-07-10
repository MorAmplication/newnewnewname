import { Module } from "@nestjs/common";
import { VikaModuleBase } from "./base/vika.module.base";
import { VikaService } from "./vika.service";
import { VikaController } from "./vika.controller";
import { VikaResolver } from "./vika.resolver";

@Module({
  imports: [VikaModuleBase],
  controllers: [VikaController],
  providers: [VikaService, VikaResolver],
  exports: [VikaService],
})
export class VikaModule {}
