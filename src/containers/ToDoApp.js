import React, { Component } from 'react';
import ListItem from '../components/ListItem';
import AddItem from '../components/AddItem';
import Filter from '../components/Filter';


class ToDoApp extends Component {

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>My To Do List</h2>
          <AddItem />
        </div>
        <ListItem />
        <Filter />
      </div>
    );
  }
}

export default ToDoApp;
