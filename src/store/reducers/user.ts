import { ACTION_SET_CHAT_USER } from '../actions/actionTypes';

const initialState: any = {
  user: null,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_SET_CHAT_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
