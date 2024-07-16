interface User {
  name: string;
  email: string;
}

export interface UserState {
  user: User | null;
}

const initalState: UserState = {
  user: null,
};

export interface UserAction {
  type: string;
  payload?: User;
}

export function userReducer(
  state = initalState,
  action: UserAction
): UserState {
  if (action.type === "user/login") {
    return {
      ...state,
      user: action.payload as User,
    };
  } else if (action.type === "user/logout") {
    return {
      ...state,
      user: null,
    };
  }
  return state;
}