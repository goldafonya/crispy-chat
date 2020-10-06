import { IProfileActions } from "./IPrrofileActions";
import { IGlobalActions } from "./IGlobalActions";
import { IChatActions } from "./IChatActions";

export type IActions =
  IProfileActions
  | IGlobalActions
  | IChatActions;