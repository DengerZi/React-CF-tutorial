/** @format */

import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Route, Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Title from "../components/Title";

import * as actions from "../actions/usersActions";

import { login, signUp } from "../requests/auth";

const useStyles = (theme) => ({
	gridContent: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		[theme.breakpoints.down("sm")]: {
			justifyContent: "flex-start",
			alignItems: "flex-start",
			flexDirection: 'column-reverse',
		},
	},
	loginBackground: {
		height: "100vh",
		backgroundSize: "cover",
		backgroundPosition: "center",
		[theme.breakpoints.down("sm")]: {
			height: "40vh",
		},
		[theme.breakpoints.down("xs")]: {
			height: "25vh",
		},
	},
	gridItem: {
		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},
	gridItemInputs: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
		[theme.breakpoints.down("sm")]: {
			paddingRight: theme.spacing(2),
			paddingLeft: theme.spacing(2),
			paddingTop: theme.spacing(6),
			paddingBottom: theme.spacing(2),
		},
	}
});

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
		<Button variant='contained' onClick={props.requestAuth} color='secondary' disabled={true}>
			Ingresar
		</Button>
	</div>
);

const SignUpActions = (props) => (
	<div>
		<Link to='/login' style={{ marginRight: "1em" }}>
			Ya tengo cuenta
		</Link>
		<Button variant='contained' onClick={props.createAccount} color='secondary' disabled={true}>
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
		const { classes } = this.props;

		return (
			<Container maxWidth='xl' disableGutters>
				<Grid container className={classes.gridContent}>
					<Grid item xs={12} sm={12} md={5} className={clsx(classes.gridItem, classes.gridItemInputs)}>
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
					<Grid item xs={12} sm={12} md={7} className={classes.gridItem}>
						<Route
							path='/login'
							exact
							render={() => (
								<div
									className={classes.loginBackground}
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
									className={classes.loginBackground}
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

Login.propTypes = {
	classes: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
	return {
		user: state.user,
	};
}

export default connect(mapStateToProps)(withStyles(useStyles)(Login));
