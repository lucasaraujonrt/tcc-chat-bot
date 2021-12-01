/* eslint-disable consistent-return */
import { Dispatch } from 'redux';
import Analytics from 'appcenter-analytics';
import firebase from '@mobile/services/firebase-settings';
import AuthApi from '@mobile/controllers/auth';
import * as Storage from '@mobile/services/storage';
import * as Message from '@mobile/services/message';
import { startLoading, stopLoading } from './loading';
import {
  ACTION_AUTH_LOGIN,
  ACTION_AUTH_LOGGED,
  ACTION_SET_FIREBASE_USER,
} from './actionTypes';
import { getMe } from './user';

export const loginFirebase = () => async (
  dispatch: Dispatch,
  getState: any
) => {
  console.log('getState().user.me.email', getState().user.me.email);
  console.log('getState().user.me.email', getState().user.me.id);
  dispatch(startLoading());
  try {
    const firebaseSignIn = await firebase
      .auth()
      .signInWithEmailAndPassword(
        `${getState().user.me.email}`,
        `${getState().user.me.id}`
      );
    dispatch({
      type: ACTION_SET_FIREBASE_USER,
      payload: firebaseSignIn.user,
    });
    console.log('firebaseSignIn', firebaseSignIn);
  } catch (error) {
    Analytics.trackEvent(`Error in firebase login`, { ErrorEvent: error });
    console.log('loginFirebase', error);
  } finally {
    dispatch(stopLoading());
  }
};

export const authenticate = (
  userData: models.AuthRequest,
  callback: (data: models.AuthResponse) => void
) => async (dispatch: Dispatch<any>) => {
  dispatch(startLoading());
  try {
    const data = await AuthApi.login(userData);
    if (data) {
      dispatch({
        type: ACTION_AUTH_LOGIN,
        payload: data,
      });
      await Storage.setItem('auth', 'true');
      await Storage.setAuthTokens(data.accessToken, data.refreshToken);
      dispatch(getMe());
      callback(data);
    }
  } catch (error) {
    if (error.message === 'INVALID_PASSWORD') {
      return Message.error('Senha inválida');
    }
    Analytics.trackEvent(`Error in login ${error}`, { ErrorEvent: error });
  } finally {
    dispatch(stopLoading());
  }
};

export const changePassword = (
  email: string,
  callback: (response: boolean) => void
) => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    await AuthApi.changePassword(email);
    callback(true);
  } catch (error) {
    callback(false);
    Analytics.trackEvent(`Error in changePassword`, { ErrorEvent: error });
  } finally {
    dispatch(stopLoading());
  }
};

export const passwordRecovery = (
  payload: models.ChangePasswordRequest,
  callback: (response: boolean) => void
) => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    await AuthApi.passwordRecovery(payload);
    callback(true);
  } catch (error) {
    callback(false);
    Analytics.trackEvent(`Error in passwordRecovery`, { ErrorEvent: error });
  } finally {
    dispatch(stopLoading());
  }
};

export const checkLogin = () => async (dispatch: Dispatch<any>) => {
  dispatch(startLoading());
  const authenticated = await Storage.getItem('auth');
  if (authenticated) {
    dispatch({
      type: ACTION_AUTH_LOGGED,
      payload: true,
    });
    dispatch(getMe());
    dispatch(loginFirebase());
  }
  dispatch(stopLoading());
};
