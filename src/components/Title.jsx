/** @format */

import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = (theme) => ({
	title: {
		[theme.breakpoints.down('md')]: {
			textAlign: 'left',
    },
	},
	description: {
		[theme.breakpoints.down('md')]: {
			textAlign: 'left',
			marginBottom: theme.spacing(4),
    },
	},
});

class Title extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<>
				<Typography variant='h2' component='h1' className={classes.title}>
					Places
				</Typography>
				<Typography variant='body1' gutterBottom className={classes.description}>
					Descubre lugares de manera simple.
				</Typography>
			</>
		);
	}
}

Title.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Title);
