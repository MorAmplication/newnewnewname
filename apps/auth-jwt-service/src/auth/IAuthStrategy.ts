import { UserTestInfo } from "./UserTestInfo";

export interface IAuthStrategy {
  validate: (...any: any) => Promise<UserTestInfo>;
}
