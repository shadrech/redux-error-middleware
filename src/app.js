import createStore from './store';

(function() {

  const store = createStore({todos: []});

  // store.dispatch({type: 'ADD_TODO', text: 'Learn about actions'});
  // store.dispatch({type: 'ADD_TODO', text: 'Learn about reducers'});
  // store.dispatch({type: 'ADD_TODO', text: 'Learn about store'});
  // store.dispatch({type: 'TOGGLE_TODO', index: 0});
  // store.dispatch({type: 'TOGGLE_TODO', index: 1});

  // simulate error
  store.dispatch({type: 'ADD_TODO', error: new Error('could not add todo')});
  store.dispatch({type: 'ADD_TODO', error: {response: {status: 403}}});
}());
