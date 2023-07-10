import { UserTestWhereInput } from "./UserTestWhereInput";
import { UserTestOrderByInput } from "./UserTestOrderByInput";

export type UserTestFindManyArgs = {
  where?: UserTestWhereInput;
  orderBy?: Array<UserTestOrderByInput>;
  skip?: number;
  take?: number;
};
