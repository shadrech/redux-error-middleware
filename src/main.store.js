import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import errorMiddleware from '../lib/index';

import reducer from './root.reducer';

export default () => {
  const initial_state = {todos: []};
  const middleware = [thunkMiddleware, createLogger({colors: {}, collapsed: true})];

  return createStore(reducer, initial_state, compose(applyMiddleware(...middleware)));
};