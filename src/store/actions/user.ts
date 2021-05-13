import { ACTION_SET_CHAT_USER } from "./actionTypes"
import { startLoading, stopLoading } from './loading';

export const setUser = (user: any) => (dispatch: any) => {
  dispatch(startLoading());
  dispatch({
    type: ACTION_SET_CHAT_USER,
    payload: user,
  });
  dispatch(stopLoading());
}