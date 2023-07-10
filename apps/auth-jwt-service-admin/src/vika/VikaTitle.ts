import { Vika as TVika } from "../api/vika/Vika";

export const VIKA_TITLE_FIELD = "id";

export const VikaTitle = (record: TVika): string => {
  return record.id || String(record.id);
};
