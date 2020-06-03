/** @format */

import React, { Component } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { withRouter } from "react-router-dom";

import Navigation from './components/navigation/Navigation';

import "./App.css";

class App extends Component {

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Navigation />
					<TransitionGroup>
						<CSSTransition
							classNames='left-out'
							timeout={300}
							key={this.props.location.pathname.split('/')[0]}>
								<div>{this.props.children}</div>
						</CSSTransition>
					</TransitionGroup>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default withRouter(App);
