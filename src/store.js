import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import errorMiddleware from '../lib/index';

import rootReducer from './reducer';

export default (initial_state) => {
  const actions = {
    error: [{type: 'HANDLE_ERROR', text: 'ERROR'}],
    forbidden: [{type: 'FORBIDDEN_ERROR', text: 'FORBIDDEN'}]
  };

  const middleware = [errorMiddleware(actions), thunkMiddleware, createLogger({colors: {}, collapsed: true})];

  return createStore(rootReducer, initial_state, compose(applyMiddleware(...middleware)));
};