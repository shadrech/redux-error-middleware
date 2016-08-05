export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return addTodo(state, action);
    case 'TOGGLE_TODO':
      return toggleTodo(state, action);
    default:
      return state;
  }
};

function addTodo(state, action) {
  return Object.assign({}, state, {
    todos: action.error ? state.todos : [...state.todos, {
      text: action.text,
      completed: false
    }],
    error: action.error
  });
}

function toggleTodo(state, action) {
  return Object.assign({}, state, {
    todos: state.todos.map((todo, index) => {
      if (index === action.index) {
        return Object.assign({}, todo, {completed: !todo.completed});
      }
      return todo;
    })
  });
}
