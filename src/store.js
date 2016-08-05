import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import errorMiddleware from '../lib/index';

import reducer from './reducer';

export default () => {
  const initial_state = {todos: []};
  const middleware = [errorMiddleware, thunkMiddleware, createLogger({colors: {}, collapsed: true})];

  return createStore(reducer, initial_state, compose(applyMiddleware(...middleware)));
};