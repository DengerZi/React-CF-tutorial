/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Card, CardText, CardMedia, CardTitle, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { CSSTransition } from 'react-transition-group';

export default class PlaceCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            show: true
        }

    }

    render(){
        return(
            <CSSTransition
                classNames='fade-scale'
                in={this.props.in}
                timeout={{}}
            >
                <div className="col-xs-12 col-sm-4" key={this.props.place.id} >
                    <Card>
                        <CardMedia>
                            <img src={process.env.PUBLIC_URL + this.props.place.imageUrl} />
                        </CardMedia>
                        <CardTitle title={this.props.place.title}></CardTitle>
                        <CardText>{this.props.place.description}</CardText>
                        <CardActions style={{'textAlign': 'right'}}>
                            <FlatButton secondary={true} label="Ver más" />
                            <FlatButton secondary={true} label="Ocultar" onClick={()=> this.props.onRemove(this.props.place)} />
                        </CardActions>
                    </Card>
                </div>
            </CSSTransition>
        );
    }
}