/** @format */

import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const useStyles = (theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
});

class MyAppBar extends React.Component {
	getName() {
		if (this.props.user.name) return this.props.user.name;
		if (this.props.user.email) return this.props.user.email.split("@")[0];
	}

	title(user) {
		return (
			<span style={{ cursor: "pointer", textTransform: "capitalize" }}>
				{this.props.user.jwt ? "Aloha " + this.getName() : "Places"}
			</span>
		);
	}

	render() {
		const { classes } = this.props;
		return (
			<AppBar position='static'>
				<Toolbar>
					{/* <IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'>
						<MenuIcon />
					</IconButton> */}
					<Typography
						variant='h6'
						className={classes.title}
						onClick={this.props.goHome}>
						{this.title()}
					</Typography>
					{this.props.user.jwt ? (
						<LogoutButton logout={this.props.logout} />
					) : (
						<LoginButton />
					)}
				</Toolbar>
			</AppBar>
		);
	}
}

MyAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(MyAppBar);
