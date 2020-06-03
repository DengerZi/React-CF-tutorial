/**
 * /* eslint-disable jsx-a11y/alt-text
 *
 * @format
 */

import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = (theme) => ({
	cover: {
		height: 250,
		[theme.breakpoints.down("md")]: {
			height: 200,
		},
		[theme.breakpoints.down("sm")]: {
			height: 350,
		},
	},
	description: {
		textAlign: "justify",
	},
	cardContent: {
		padding: theme.spacing(1),
	}
});

class PlaceCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: true,
		};
	}

	render() {
		const { classes } = this.props;
		return (
			<CSSTransition
				unmountOnExit={true}
				timeout={{ enter: 500, exit: 500 }}
				classNames='fade-scale'
				in={this.props.in}>
				<Grid item xs={12} sm={6} lg={4} key={this.props.place.id} className={classes.cardContent}>
					<Card>
						<CardMedia
							className={classes.cover}
							image={process.env.PUBLIC_URL + this.props.place.imageUrl}
							title={this.props.place.title}
						/>
						<CardContent>
							<Typography variant='h6' gutterBottom>
								{this.props.place.title}
							</Typography>
							<Typography variant='body2' className={classes.description}>
								{this.props.place.description}
							</Typography>
						</CardContent>
						<CardActions style={{ justifyContent: "flex-end" }}>
							<Button color='secondary'>Ver más</Button>
							<Button
								color='secondary'
								onClick={() => this.props.onRemove(this.props.place)}>
								Ocultar
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</CSSTransition>
		);
	}
}

PlaceCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(PlaceCard);
