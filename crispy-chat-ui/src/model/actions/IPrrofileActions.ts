import { PROFILE_ACTIONS } from "../../constants/PROFILE_ACTIONS";

interface IProfileActionIncrement {
    type: PROFILE_ACTIONS.INCREMENT
}

interface IProfileActionDecrement {
    type: PROFILE_ACTIONS.DECREMENT
}

export type IProfileActions = IProfileActionIncrement | IProfileActionDecrement;