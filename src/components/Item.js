import React, {Component} from "react";
import {connect} from 'react-redux';
import {removeTodo, toggleTodo} from '../actions/index';

class Item extends Component {

  handleRemoveTodo = (e, id) => {
    e.stopPropagation();
    this.props.removeTodo(id);
  }

  render(){
    const {name, checked, id, toggleTodo} = this.props;
    return(
      <li onClick={(e) => toggleTodo(id)} className={checked ? 'checked' : ''}>{name}<span onClick={(e) => this.handleRemoveTodo(e, id)} className="close">×</span></li>
    );
  }
}

export default connect(null, {removeTodo, toggleTodo} )(Item);
