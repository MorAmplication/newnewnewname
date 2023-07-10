import { Vika as TVika } from "../api/vika/Vika";

export const VIKA_TITLE_FIELD = "username";

export const VikaTitle = (record: TVika): string => {
  return record.username || String(record.id);
};
