import { IProfile } from "./IProfile";
import { IGlobal } from "./IGlobal";

export interface IStore {
  profile: IProfile;
  global: IGlobal;
}