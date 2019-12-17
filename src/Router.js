import React from 'react';

import {
  BrowserRouter as ReactRouter,
  Route
} from 'react-router-dom';
import { render } from 'react-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import App from './App';

export default class Router extends React.Component{

  signedInRoutes(){
    if(true){
      return(
        <Route path="/new" render={() => <h1>Welcome</h1>}></Route>
      )
    }
  }
  render(){
    return(
      <ReactRouter>
        <App>
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Login}></Route>
          {this.signedInRoutes()}
        </App>
      </ReactRouter>
    );
  }
}