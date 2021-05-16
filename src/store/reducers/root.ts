import { combineReducers } from 'redux';

import LoadingReducer from './loading';
import UserReducer from './user';
import AuthReducer from './auth';

const appReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  loading: LoadingReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
