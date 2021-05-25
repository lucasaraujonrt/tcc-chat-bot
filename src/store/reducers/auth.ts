import { ACTION_AUTH_LOGGED } from '../actions/actionTypes';

const initialState: reducers.AuthState = {
  authenticated: {
    accessToken: null,
    refreshToken: null,
  },
  logged: null,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_AUTH_LOGGED:
      return {
        ...state,
        logged: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
