import { InputJsonValue } from "../../types";

export type UserTestCreateInput = {
  username: string;
  password: string;
  roles: InputJsonValue;
};
