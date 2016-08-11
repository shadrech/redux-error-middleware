# redux-error-middleware

Middleware that dispatches defined actions when the current action has an error.

## Installation
```
npm install redux-error-middleware
```

To enable redux-error-middleware, use the [applyMiddleware](http://redux.js.org/docs/api/applyMiddleware.html) function. The below example also uses [redux-thunk](https://github.com/gaearon/redux-thunk) and [redux-logger](https://github.com/evgenyrodionov/redux-logger).

Version `1.x` of _redux-error-middleware_ allows you to define an actions object with error and forbidden keys.  

Their values are an array of actions to dispatch. Each entry in the array can either be an object (action) or function (action creator).

```javascript
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import errorMiddleware from 'redux-error-middleware';

import rootReducer from './reducer';
import {handleErrorActionCreator} from './actions';

export default (initial_state) => {
  const actions = {
    error: [{type: 'HANDLE_ERROR', text: 'ERROR'}, handleErrorActionCreator],
    forbidden: [{type: 'FORBIDDEN_ERROR', text: 'FORBIDDEN'}]
  };

  const middleware = [errorMiddleware(actions), thunkMiddleware, createLogger()];

  return createStore(reducer, initial_state, applyMiddleware(...middleware));
};

```

## Motivation
Imagine wanting to display a [SnackBar](https://github.com/johnrhampton/SnackBar) or log to papertrail anytime an error occurs.  This middleware allows you to define those action(s) when creating your Redux store.

Imagine wanting to graciously handle situations where your user's token has expired.  This middleware allows you to define multiple actions that can be dispatched on a 403.

For example. Let's say when your API responds with a 403 (forbidden), you want to notify and logout the user.

### Actions
```javascript
import {show} from 'js-snackbar';

export const LOGOUT_USER = 'LOGOUT_USER';
export const SHOW_SNACK = 'SHOW_SNACK';

/**
 * display a snackbar
 */
export function showSnack(error) {
  return (dispatch, getState) => {
    // display snackbar
    show({text: error.message});

    dispatch({type: SHOW_SNACK, message: payload.message});
  }
}

/**
 * logout a user
 */
export function logout() {
  return {
    type: LOGOUT_USER
  }
}

```

### Store 
```javascript
import {createStore, applyMiddleware, compose} from 'redux';
import errorMiddleware from 'redux-error-middleware';
import {showSnack, logout} from './actions';

import rootReducer from './reducer';

export default (initial_state) => {
  /**
   * dispatch showSnack and logout when our API responds with a 403 status
   */
  const actions = {
    forbidden: [showSnack, logout]
  };

  const middleware = [errorMiddleware(actions)];

  return createStore(rootReducer, initial_state, compose(applyMiddleware(...middleware)));
};

```

## Run Locally

Global Dependencies:
```
npm install -g npm3
```

Run the sandbox node app:
```
npm3 install && npm start
```

Build distributable output in the `dist` folder
```
npm run build:dist
```

Run unit tests
```
npm test
```