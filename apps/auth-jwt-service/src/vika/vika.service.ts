import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VikaServiceBase } from "./base/vika.service.base";

@Injectable()
export class VikaService extends VikaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
