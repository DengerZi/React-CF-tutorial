/** @format */

import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Route, Link } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Title from "../components/Title";

import * as actions from "../actions/usersActions";

import { login, signUp } from "../requests/auth";

const NameField = (props) => (
	<TextField
		label='Nombre'
		type='text'
		className='textfield'
		ref={props.nameRef}
		variant='outlined'
		fullWidth
	/>
);

const LoginActions = (props) => (
	<div>
		<Link to='/signup' style={{ marginRight: "1em" }}>
			Crear nueva cuenta
		</Link>
		<Button variant='contained' onClick={props.requestAuth} color='secondary'>
		Ingresar
		</Button>
	</div>
);

const SignUpActions = (props) => (
	<div>
		<Link to='/login' style={{ marginRight: "1em" }}>
			Ya tengo cuenta
		</Link>
		<Button variant='contained' onClick={props.createAccount} color='secondary'>
			Crear cuenta
		</Button>
	</div>
);

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.requestAuth = this.requestAuth.bind(this);
		this.createAccount = this.createAccount.bind(this);
		this.auth = this.auth.bind(this);
	}

	requestAuth() {
		const credentials = {
			email: this.refs.emailField.getValue(),
			password: this.refs.passwordField.getValue(),
		};

		login(credentials).then(this.auth).catch(console.log);
	}

	auth(data) {
		this.props.dispatch(actions.login(data.jwt));
		this.props.dispatch(actions.loadUser(data.user));
		this.props.dispatch(push("/"));
	}

	createAccount() {
		console.log(this.nameElement);

		const credentials = {
			email: this.refs.emailField.getValue(),
			password: this.refs.passwordField.getValue(),
			name: this.nameElement.getValue(),
		};

		console.log(credentials);

		signUp(credentials).then(this.auth).catch(console.log);
	}

	render() {
		return (
			<Container maxWidth='xl'>
				<Grid
					container
					direction='row'
					justify='space-between'
					alignItems='center'>
					<Grid item md={4}>
						<Title />
						<TextField
							label='Correo electrónico'
							type='email'
							className='textfield'
							ref='emailField'
							variant='outlined'
							fullWidth
						/>
						<TextField
							label='Contraseña'
							type='password'
							className='textfield'
							ref='passwordField'
							variant='outlined'
							fullWidth
						/>
						<Route
							path='/signup'
							exact
							render={() => (
								<NameField nameRef={(el) => (this.nameElement = el)} />
							)}></Route>
						<div className='Login-actions'>
							<Route
								path='/login'
								exact
								render={() => (
									<LoginActions requestAuth={this.requestAuth} />
								)}></Route>
							<Route
								path='/signup'
								exact
								render={() => (
									<SignUpActions createAccount={this.createAccount} />
								)}></Route>
						</div>
					</Grid>
					<Grid item md={7}>
						<Route
							path='/login'
							exact
							render={() => (
								<div
									className='Login-background'
									style={{
										backgroundImage:
											"url(" +
											process.env.PUBLIC_URL +
											"/images/login-background.jpg" +
											")",
									}}></div>
							)}></Route>
						<Route
							path='/signup'
							exact
							render={() => (
								<div
									className='Login-background'
									style={{
										backgroundImage:
											"url(" +
											process.env.PUBLIC_URL +
											"/images/friends.jpg" +
											")",
									}}></div>
							)}></Route>
					</Grid>
				</Grid>
			</Container>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		user: state.user,
	};
}

export default connect(mapStateToProps)(Login);
