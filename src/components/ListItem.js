import React, {Component} from 'react';
import Item from './Item';
import {fetchTodos} from '../actions/index';
import {connect} from 'react-redux';

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
      this.props.all.map((text, idx) => {
        return <Item key={idx} name={text} id={idx}/>;
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
  return {all: state.todos.all};
}

export default connect(mapStateToProps, {fetchTodos} )(ListItem);
