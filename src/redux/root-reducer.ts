import { combineReducers } from "redux";
import { userReducer } from "./User/UserReducer";

export const rootReducer = combineReducers({
  userReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
