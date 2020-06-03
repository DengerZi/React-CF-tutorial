/**
 * /* eslint-disable jsx-a11y/alt-text
 *
 * @format
 */

import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import PermScanWifiIcon from "@material-ui/icons/PermScanWifi";

import { red, lightBlue, amber } from "@material-ui/core/colors";

const useStyles = (theme) => ({
	root: {
		display: "flex",
	},
	details: {
		display: "flex",
		flexDirection: "column",
		padding: theme.spacing(2),
		height: 100,
	},
	content: {
		flex: "1 0 auto",
	},
	cover: {
		width: 151,
	},
	titleBenefit: {
		lineHeight: 1.2,
		fontSize: 18,
		[theme.breakpoints.down("md")]: {
			fontSize: 14,
		},
	},
});

class Benefit extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Hidden mdDown>
				<Grid
					container
					direction='row'
					justify='space-evenly'
					alignItems='center'
					spacing={3}>
					<Grid item xs={4}>
						<Card className={classes.root}>
							<CardHeader
								avatar={
									<FavoriteBorderIcon
										style={{ fontSize: 72, color: "white", marginLeft: 16 }}
									/>
								}
								style={{ backgroundColor: red["A400"] }}
							/>
							<div className={classes.details}>
								<Typography
									variant='h6'
									className={classes.titleBenefit}
									gutterBottom>
									Calificaciones con emociones
								</Typography>
								<Typography variant='body2' style={{ textAlign: "justify" }}>
									Califica tus lugares con experiencias, no con números
								</Typography>
							</div>
						</Card>
					</Grid>
					<Grid item xs={4}>
						<Card className={classes.root}>
							<CardHeader
								avatar={
									<PermScanWifiIcon
										style={{ fontSize: 72, color: "white", marginLeft: 16 }}
									/>
								}
								style={{ backgroundColor: lightBlue["A400"] }}
							/>
							<div className={classes.details}>
								<Typography
									variant='h6'
									className={classes.titleBenefit}
									gutterBottom>
									¿Sin internet? Sin problemas
								</Typography>
								<Typography variant='body2' style={{ textAlign: "justify" }}>
									Places funciona sin internet o en conexiones lentas
								</Typography>
							</div>
						</Card>
					</Grid>
					<Grid item xs={4}>
						<Card className={classes.root}>
							<CardHeader
								avatar={
									<StarBorderIcon
										style={{ fontSize: 72, color: "white", marginLeft: 16 }}
									/>
								}
								style={{ backgroundColor: amber["A400"] }}
							/>
							<div className={classes.details}>
								<Typography
									variant='h6'
									className={classes.titleBenefit}
									gutterBottom>
									¿No sabes a donde ir? Tus lugares favoritos
								</Typography>
								<Typography variant='body2' style={{ textAlign: "justify" }}>
									Define tu lista de sitios favoritos
								</Typography>
							</div>
						</Card>
					</Grid>
				</Grid>
			</Hidden>
		);
	}
}

Benefit.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Benefit);
