import {
  ACTION_SET_CHAT_USER,
  // UserDispatchTypes,
  ACTION_USER_ME,
} from '../actions/actionTypes';

const initialState: reducers.UserState = {
  user: null,
  me: null,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_SET_CHAT_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ACTION_USER_ME:
      return {
        ...state,
        me: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
