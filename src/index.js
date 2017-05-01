import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import reducers from './reducers';
import ToDoApp from './containers/ToDoApp';


const createStoreWithMiddleware = applyMiddleware()(createStore);
const customHistory = createBrowserHistory()

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={customHistory}>
      <Route path='/' component={ToDoApp} ></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
