// auth
export const ACTION_AUTH_LOGGED = 'ACTION_AUTH_LOGGED';
export const ACTION_AUTH_LOGIN = 'ACTION_AUTH_LOGIN';

// user
export const ACTION_SET_CHAT_USER = 'ACTION_SET_CHAT_USER';
export const ACTION_USER_ME = 'ACTION_USER_ME';

export type UserType = {
  name: string;
};
export interface User {
  type: typeof ACTION_SET_CHAT_USER;
  payload: string;
}

export type UserDispatchTypes = User;

// loading
export const ACTION_LOADING_END = 'ACTION_LOADING_END';
export const ACTION_LOADING_START = 'ACTION_LOADING_START';
