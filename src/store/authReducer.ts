import { Actions } from "./actionEnums";
import { AnyAction } from "redux";

const initialState = {
  user: {},
};

export const AuthReducer = (state = initialState, action: AnyAction) => {
  if (action.type === Actions.LOGIN) {
    return { ...state, user: action.payload.user };
  }
};
