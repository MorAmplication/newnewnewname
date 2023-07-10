import { UserTest as TUserTest } from "../api/userTest/UserTest";

export const USERTEST_TITLE_FIELD = "username";

export const UserTestTitle = (record: TUserTest): string => {
  return record.username || String(record.id);
};
