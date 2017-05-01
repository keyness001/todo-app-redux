import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {value : ''};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.value) {
      this.props.addTodo(this.state.value);
    }
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  render(){
    return(
      <form onSubmit={(e) => this.handleSubmit(e)} >
        <input name="add-item" value={this.state.value} onChange={this.handleChange} placeholder="Title..."/>
        <button type="submit" name="add" className="addBtn" >Add</button>
      </form>
    );
  }
}

export default connect(null, {addTodo} )(AddItem);
