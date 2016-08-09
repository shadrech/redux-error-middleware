# redux-error-middleware

Middleware that dispatches custom actions when any action has an error.

## Complete Documentation coming soon!! 

## Installation
```
npm install redux-error-middleware
```

To enable redux-error-middleware, use the [applyMiddleware](http://redux.js.org/docs/api/applyMiddleware.html) function. This example also uses [redux-thunk](https://github.com/gaearon/redux-thunk) and [redux-logger](https://github.com/evgenyrodionov/redux-logger).
```javascript
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import errorMiddleware from 'redux-error-middleware';

import rootReducer from './reducer';

export default (initial_state) => {
  const middleware = [errorMiddleware, thunkMiddleware, createLogger()];

  return createStore(reducer, initial_state, applyMiddleware(...middleware));
};

```

## Motivation
Imagine wanting to display a snackbar notification to the user anytime an error occurs.  This middleware allows you to define that action in one place.

Imagine wanting to graciously handle situations where your user's token has expired.  This middleware allows you to define multiple actions that can be dispatched on a 403.

For example. Let's say that when your API returns a 403 (forbidden), you want to display a snackbar and dispatch your logout action.
```javascript


```

