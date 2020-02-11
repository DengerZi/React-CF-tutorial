/** @format */

import React from "react";

import { BrowserRouter as ReactRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
import { ConnectedRouter } from 'connected-react-router';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import App from "./App";
import Place from "./pages/Place";

const userSignedIn = false;

class Router extends React.Component {
	signedInRoutes() {
		if (this.props.user.jwt) {
			return <Route path='/new' render={() => <h1>Welcome</h1>}></Route>;
		}
	}

	home() {
		if (this.props.user.jwt) return Dashboard;
		return Home;
	}

	render() {
		return (
			<ConnectedRouter history={this.props.history}>
				<App>
					<Switch>
						<Route exact path='/' component={this.home()}></Route>
						<Route path='/lugares/:slug' component={Place}></Route>
						<Route path='/login' component={Login}></Route>
						<Route path='/signup' component={Login}></Route>
					</Switch>
					{this.signedInRoutes()}
				</App>
			</ConnectedRouter>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Router);