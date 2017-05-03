
export const FETCH_TODOS = 'FETCH_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const FILTER = 'FILTER';


export function fetchTodos(){
  const data = [
    {text: 'aaaa', completed: false},
    {text: 'bbbb', completed: false},
    {text: 'aaaa', completed: false}
  ];
  return {type: FETCH_TODOS, payload: data};
}

export function removeTodo(id){
  return {type: REMOVE_TODO, payload: id};
}

export function toggleTodo(id){
  return {type: TOGGLE_TODO, payload: id};
}

export function addTodo(value){
  return {type: ADD_TODO, payload: value};
}

export function filterTodo(title){
  return {type: FILTER, payload: title};
}
