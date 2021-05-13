import { ACTION_LOADING_END, ACTION_LOADING_START } from './actionTypes';

export const startLoading = () => ({
  type: ACTION_LOADING_START,
});

export const stopLoading = () => ({
  type: ACTION_LOADING_END,
});
