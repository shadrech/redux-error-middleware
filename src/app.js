import createStore from './main.store';

(function() {

  const store = createStore();

  // Dispatch some actions
  store.dispatch({type: 'ADD_TODO', text: 'Learn about actions'});
  store.dispatch({type: 'ADD_TODO', text: 'Learn about reducers'});
  store.dispatch({type: 'ADD_TODO', text: 'Learn about store'});
  store.dispatch({type: 'TOGGLE_TODO', index: 0});
  store.dispatch({type: 'TOGGLE_TODO', index: 1});

}());
