export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const BULK_ADD_TODO = "BULK_ADD_TODO";

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
