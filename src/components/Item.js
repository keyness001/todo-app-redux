import React, {Component} from "react";
import {connect} from 'react-redux';
import {removeTodo} from '../actions/index';

class Item extends Component {

  render(){
    const {name, id, removeTodo} = this.props;
    return(
      <li onClick={(e) => removeTodo(id)}>{name}<span className="close">×</span></li>
    );
  }
}

export default connect(null, {removeTodo} )(Item);
