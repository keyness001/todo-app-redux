
export const FETCH_TODOS = 'FETCH_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO';
export const ADD_TODO = 'ADD_TODO';

export function fetchTodos(){
  const data = ['aaaa', 'bbbb', 'cccc'];
  return {type: FETCH_TODOS, payload: data};
}

export function removeTodo(id){
  return {type: REMOVE_TODO, payload: id};
}

export function addTodo(value){
  return {type: ADD_TODO, payload: value};
}
