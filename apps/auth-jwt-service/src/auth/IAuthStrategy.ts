import { VikaInfo } from "./VikaInfo";

export interface IAuthStrategy {
  validate: (...any: any) => Promise<VikaInfo>;
}
