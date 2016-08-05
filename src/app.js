import createStore from './store';
import {addTodo, addTodoError, toggleTodo} from './action';

(function() {

  const store = createStore();

  store.dispatch(addTodo('Learn about actions'));
  // store.dispatch(addTodo('Learn about reducers'));
  // store.dispatch(addTodo('Learn about store'));
  // store.dispatch(toggleTodo(0));
  //store.dispatch(toggleTodo(1));

  store.dispatch(addTodoError());

}());
