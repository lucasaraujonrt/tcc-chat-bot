import UserApi from '@mobile/controllers/user';
import { Dispatch } from 'redux';
import { ACTION_SET_CHAT_USER, ACTION_USER_ME } from './actionTypes';
import { startLoading, stopLoading } from './loading';

export const setUser = (user: string) => (dispatch: Dispatch) => {
  dispatch(startLoading());
  dispatch({
    type: ACTION_SET_CHAT_USER,
    payload: user,
  });
  dispatch(stopLoading());
};

export const getMe = () => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    const data = await UserApi.me();
    if (data) {
      dispatch({
        type: ACTION_USER_ME,
        payload: data,
      });
    }
  } catch (error) {
    console.log('user get me', error);
  } finally {
    dispatch(stopLoading());
  }
};
