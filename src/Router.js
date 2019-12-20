import React from 'react';

import {
  BrowserRouter as ReactRouter,
  Route
} from 'react-router-dom';
import { render } from 'react-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import App from './App';

const userSignedIn = false;

export default class Router extends React.Component{
  signedInRoutes(){
    if(userSignedIn){
      return(
        <Route path="/new" render={() => <h1>Welcome</h1>}></Route>
      )
    }
  }

  home(){
    if(userSignedIn) return Dashboard
    return Home
  }

  render(){
    return(
      <ReactRouter>
        <App>
          <Route exact path="/" component={this.home()}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Login}></Route>
          {this.signedInRoutes()}
        </App>
      </ReactRouter>
    );
  }
}