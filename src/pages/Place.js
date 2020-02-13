/** @format */

import React from "react";
import { withRouter } from "react-router-dom";
import { Card } from "material-ui";
import FlatButton from 'material-ui/FlatButton';

import Container from "../components/Container";
import { getPlace } from "../requests/places";
import VisitModal from "../components/visits/VisitModal";

class Place extends React.Component {
	constructor(props) {
    super(props); 
    const slug = props.match.params.slug;
    this.loadPlace(slug);

		this.state = {
			place: {},
		};

		this.openVisitsModal = this.openVisitsModal.bind(this)
  }
  
  loadPlace(slug){
    getPlace(slug).then(json => {
      this.setState({
        place: json
      })
    })
	}
	
	openVisitsModal(){
		// console.log(this.refs);
		this.refs.modalRef.openModal()
	}

	render() {
    const {place} = this.state; // <-- Destructing assignment ES6
		return (
			<div className='Place-container'>
				<VisitModal place={place} ref='modalRef' />
				<header
					className='Place-cover'
					style={{
						backgroundImage: "url(" + place.coverImage + ")",
					}}></header>
				<Container>
					<div className='row'>
						<div className='col-xs-12 col-md-8'>
							<Card className='Place-card'>
								<div className='col-xs-12 col-sm-3 col-lg-2'>
									<img
										src={place.avatarImage}
										style={{ 'maxWidth': '100%' }}
										alt={'img-' + place.title}
									/>
								</div>
								<div className='col-xs'>
									<h1>{place.title}</h1>
									<address>{place.address}</address>
									<p>{place.description}</p>
								</div>
								<div style={{'marginTop': '1em'}}>
									<FlatButton label="Agregar un comentario" secondary={true} onClick={this.openVisitsModal} />
								</div>
							</Card>
						</div>
					</div>
				</Container>
			</div>
		);
	}
}

export default withRouter(Place);