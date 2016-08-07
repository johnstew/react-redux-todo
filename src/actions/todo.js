import { ADD_TODO, COMPLETE_TODO } from '../core/actiontypes';

export const addTodo = (task) => {
  return {
    type: ADD_TODO,
    task
  };
}

export const completeTodo = (index) => {
  return {
    type: COMPLETE_TODO,
    index
  };
}
