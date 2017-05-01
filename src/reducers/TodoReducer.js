import update from 'immutability-helper';
import {FETCH_TODOS, REMOVE_TODO, ADD_TODO} from '../actions/index';

const INITIAL_STATES = {all : []};

export default function(state = INITIAL_STATES, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {...state, all: action.payload};
    case REMOVE_TODO:
      return update(state, {all : {$splice: [[action.payload, 1]]}});
    case ADD_TODO:
      return update(state, {all : {$push: [action.payload]}});
    default:
      return state;
  }
}
