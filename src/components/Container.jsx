/** @format */

import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const ContainerRoot = (props) => {
	return (
		<Container maxWidth='lg' disableGutters>
			<Grid container direction='row' justify='center' alignItems='center'>
				<Grid item xs={12} sm={12} md={11} lg={11}>
					{props.children}
				</Grid>
			</Grid>
		</Container>
	);
};

export default ContainerRoot;
