import update from 'immutability-helper';
import {FETCH_TODOS, REMOVE_TODO, TOGGLE_TODO, ADD_TODO, FILTER} from '../actions/index';

const INITIAL_STATES = {all : [], filter : 'SHOW_ALL'};

const toggleTodos = (todos, id) => {
  todos.all = todos.all.map(function(todo, idx){
    if(idx === id) todo.completed = !todo.completed;
    return todo;
  });
  return todos;
}

export default function(state = INITIAL_STATES, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {...state, all: action.payload};
    case REMOVE_TODO:
      return update(state, {all : {$splice: [[action.payload, 1]]}});
    case TOGGLE_TODO:
      return toggleTodos({...state}, action.payload);
    case ADD_TODO:
      return update(state, {all : {$push: [{text: action.payload, completed: false}]}});
    case FILTER:
      state = {...state};
      state.filter = action.payload;
      return state;
    default:
      return state;
  }
}
