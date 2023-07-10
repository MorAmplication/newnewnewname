import { JsonValue } from "type-fest";

export type Vika = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  username: string;
  roles: JsonValue;
};
