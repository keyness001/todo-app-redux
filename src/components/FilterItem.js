import { connect } from 'react-redux';
import React, {Component} from 'react';
import {filterTodo} from '../actions/index';

class FilterItem extends Component {
  render(){
    const {filter, filterTodo, active} = this.props;
    return(
      <a className={active ? 'active' : ''} href="#" onClick={(e) => filterTodo(filter)}>{filter}</a>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.todos.filter
  }
}

export default connect(mapStateToProps, {filterTodo})(FilterItem)
