import {createStore, applyMiddleware, compose} from 'redux';
import errorMiddleware from '../lib/index';

import user from './reducer';
const initial_state = {};

(function() {

  console.log('starting');

  const createReduxStore = () => {
    const baseline_middlewares = [errorMiddleware];

    return createStore(
      user,
      initial_state,
      compose(applyMiddleware(...baseline_middlewares))
    );
  };

  const store = createReduxStore();

  console.log('store created');

}());
