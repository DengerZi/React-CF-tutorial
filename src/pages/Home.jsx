/**
 * /* eslint-disable jsx-a11y/alt-text
 *
 * @format
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { indigo } from "@material-ui/core/colors";


import Title from "../components/Title";
import Container from "../components/Container";
import Benefit from "../components/Benefits";
import PlaceCard from "../components/places/PlaceCard";

import data from "../requests/places";
// import { getPlaces } from "../requests/places";

const useStyles = (theme) => ({
	HeaderIllustration: {
		position: 'absolute',
		zIndex: -1,
		top: -60,
		height: 400,
		right: 0,
		[theme.breakpoints.down('xs')]: {
			opacity: 0.3,
    },
	},
	HeaderBackground: {
		paddingBottom: 50,
		paddingTop: 100,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		minHeight: '22vh',
		[theme.breakpoints.down('md')]: {
			textAlign: 'left',
			marginLeft: theme.spacing(4),
    },
	},
});

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			places: data.places,
		};

		this.hidePlace = this.hidePlace.bind(this);
	}

	// loadPlace(){
	// 	getPlaces().then(jsonResponse => {
	// 		const places = jsonResponse.docs;
	// 	})

	// }

	places() {
		return this.state.places.map((place, index) => {
			return (
				<PlaceCard
					onRemove={this.hidePlace}
					place={place}
					index={index}
					key={index}
				/>
			);
		});
	}

	hidePlace(place) {
		this.setState({
			places: this.state.places.filter((el) => el !== place),
		});
	}

	render() {
		const { classes } = this.props;
		
		return (
			<section>
				<div className={classes.HeaderBackground}>
					<Container>
						<div className='Header-main'>
							<Title></Title>
							<Button variant='contained' color='secondary' href='/signup'>
								Crear cuenta gratuita
							</Button>

							<img
								className={classes.HeaderIllustration}
								src={process.env.PUBLIC_URL + "/images/place.png"}
								alt='Header-illustration'></img>
						</div>
						<div>
							<Benefit></Benefit>
						</div>
					</Container>
				</div>

				<div
					style={{
						backgroundColor: indigo[400],
						color: "white",
						padding: '30px 15px',
					}}>
					<Container>
						<Typography variant='h4' gutterBottom>
							Sitios Populares
						</Typography>
						<Grid
							container
							direction='row'
							justify='start'
							alignItems='center'
							spacing={1}>
							{this.places()}
						</Grid>
					</Container>
				</div>
			</section>
		);
	}
}

Home.propTypes = {
	classes: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
	return {
		places: state.places,
	};
}

export default connect(mapStateToProps)(withStyles(useStyles)(Home));
