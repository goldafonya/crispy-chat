import { IProfile } from "./IProfile";
import { IGlobal } from "./IGlobal";
import { IChat } from "./IChat";

export interface IStore {
  profile: IProfile;
  global: IGlobal;
  chat: IChat;
}