import React, {Component} from 'react';
import Item from './Item';
import {fetchTodos} from '../actions/index';
import {connect} from 'react-redux';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

class ListItem extends Component {
  constructor(props){
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount(){
    this.props.fetchTodos();
  }

  renderItem = () => {
    return(
      this.props.todos.map((obj, idx) => {
        return <Item key={idx} name={obj.text} checked={obj.completed} id={idx}/>;
      }, this)
    );
  }

  render(){
    return(
      <ul>
        {this.renderItem()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    todos: getVisibleTodos(state.todos.all, state.todos.filter)
  }
}

export default connect(mapStateToProps, {fetchTodos} )(ListItem);
