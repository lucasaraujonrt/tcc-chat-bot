import {
  ACTION_SET_CHAT_USER,
  UserDispatchTypes,
} from '../actions/actionTypes';

const initialState: reducers.UserState = {
  user: null,
};

export const userReducer = (
  state = initialState,
  action: UserDispatchTypes
) => {
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
