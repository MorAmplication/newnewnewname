import { JsonValue } from "type-fest";

export type UserTest = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  username: string;
  roles: JsonValue;
};
