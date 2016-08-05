export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const HANDLE_ERROR = 'HANDLE_ERROR';

export function addTodo(text) {
  return {type: 'ADD_TODO', text};
}

export function addTodoError() {
  return {type: 'ADD_TODO', error: new Error('could not add todo')};
}

export function toggleTodo(index) {
  return {type: 'TOGGLE_TODO', index};
}
