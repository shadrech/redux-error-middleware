import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import errorMiddleware from '../lib/index';
import rootReducer from './reducer';

export default (initial_state) => {
  /**
   * example of an action creator
   */
  const handleError = (error) => {
    return (dispatch, getState) => {
      console.log(error.message);
      dispatch({type: 'HANDLED_ERROR'});
    };
  };

  const actions = {
    error: [{type: 'HANDLE_ERROR', text: 'ERROR'}, handleError],
    forbidden: [{type: 'FORBIDDEN_ERROR', text: 'FORBIDDEN'}]
  };

  const middleware = [errorMiddleware(actions), thunkMiddleware, createLogger({colors: {}, collapsed: true})];

  return createStore(rootReducer, initial_state, compose(applyMiddleware(...middleware)));
};