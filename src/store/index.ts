import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/root';

const init = () => createStore(rootReducer, compose(applyMiddleware(thunk)));

const store = init();

export default store;
