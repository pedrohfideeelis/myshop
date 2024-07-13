import { combineReducers } from "redux";
import { userReducer } from "./User/UserReducer";
import { cartReducer } from "./Cart/CartReducer";

export const rootReducer = combineReducers({
  userReducer,
  cartReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
