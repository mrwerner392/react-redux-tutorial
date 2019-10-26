// handle actions that affect the todos list (i.e. adding or toggling)
// set default state value to an empty array
// state here will only by the todos key of state
// return state in default case of switch statement

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => (
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      ));
    default:
      return state;
  };
}

export default todos;
