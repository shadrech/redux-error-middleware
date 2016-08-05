
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
  let todos = [...state.todos, {
    text: action.text,
    completed: false
  }];

  return Object.assign({}, state, {
    todos: todos,
    error: action.error
  });
}

function toggleTodo(state, action) {
  let todos = state.todos.map((todo, index) => {
    if (index === action.index) {
      return Object.assign({}, todo, {
        completed: !todo.completed
      });
    }
    return todo;
  });

  return Object.assign({}, state, {
    todos: todos,
    error: action.error
  });
}
