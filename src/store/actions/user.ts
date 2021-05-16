import { Dispatch } from 'redux';
import { ACTION_SET_CHAT_USER, UserDispatchTypes } from './actionTypes';
import { startLoading, stopLoading } from './loading';

// eslint-disable-next-line import/prefer-default-export
export const setUser = (user: string) => (
  dispatch: Dispatch<UserDispatchTypes>
) => {
  dispatch(startLoading());
  dispatch({
    type: ACTION_SET_CHAT_USER,
    payload: user,
  });
  dispatch(stopLoading());
};
