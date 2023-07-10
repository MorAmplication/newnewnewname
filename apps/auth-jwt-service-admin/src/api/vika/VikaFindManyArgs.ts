import { VikaWhereInput } from "./VikaWhereInput";
import { VikaOrderByInput } from "./VikaOrderByInput";

export type VikaFindManyArgs = {
  where?: VikaWhereInput;
  orderBy?: Array<VikaOrderByInput>;
  skip?: number;
  take?: number;
};
