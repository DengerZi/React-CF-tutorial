/** @format */

import React from "react";
import { connect } from 'react-redux';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import ContentAdd from '@material-ui/icons/Add';

import Container from "../components/Container";
import PlaceHorizontal from "../components/places/PlaceHorizontal";

import * as actions from '../actions/placesActions';

class Dashboard extends React.Component {

  constructor(props) {
		super(props);

		this.loadPlace()
	}

	loadPlace(){
		this.props.dispatch(actions.loadAll())
	}

  places(){
		return this.props.places.map((place, index) => {
			return <PlaceHorizontal place={place} key={index} />
		})
  }

	render() {
		return (
			<div>
				<Link to="/new">
					<IconButton 
						className="FAB"
						secondary={true}>
							<ContentAdd />
					</IconButton>
				</Link>
				<Container>
					<div className="row">
						<div className="col-xs-12 col-md-2" style={{"textAlign":"left"}}>
							<Button label="Explorar" />
							<Button label="Favoritos" />
							<Button label="Visitas Previas" />
						</div>
						<div className="col-xs-12 col-md-10">
              {this.places()}
            </div>
					</div>
				</Container>
      </div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return{
		places: state.places
	}
}

export default connect(mapStateToProps)(Dashboard);