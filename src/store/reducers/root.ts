import { combineReducers } from 'redux';

import loadingReducer from './loading';
import userReducer from './user';

const appReducer = combineReducers({
  user: userReducer,
  loading: loadingReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
