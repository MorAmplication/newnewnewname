import { SortOrder } from "../../util/SortOrder";

export type VikaOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
};
