import { GLOBAL_ACTIONS } from "../../constants/GLOBAL_ACTIONS";

interface IGlobalActionInit {
  type: GLOBAL_ACTIONS.INIT
}

interface IGlobalActionLogout {
  type: GLOBAL_ACTIONS.LOGOUT
}

export type IGlobalActions = IGlobalActionInit | IGlobalActionLogout;