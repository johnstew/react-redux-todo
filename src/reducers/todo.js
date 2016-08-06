
import {
  ADD_TODO,
  COMPLETE_TODO
} from '../actions/todo';

const initState = {
  todos: [
    {
      task: 'Build! Build! Build!',
      completed: false
    },
    {
      task: 'Work! Work! Work!',
      completed: true
    },
    {
      task: 'Play! Play! Play!',
      completed: false
    }
  ]
};

export default function search(state = initState, action) {
  switch(action.type) {
    case ADD_TODO:
      return _.assign({}, state, {
        todos: [...state.todos, {
          task: action.task,
          completed: false
        }]
      });
    case COMPLETE_TODO:
      return _.assign({}, state, {
        todos: state.todos.map((t, i) => {
          if (i === action.index) {
            return {
              task: t.task,
              completed: true
            };
          }
          return t;
        })
      });
    default:
      return state;
  }
}
