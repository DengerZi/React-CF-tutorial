import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class PlaceHorizontal extends React.Component{
  render(){
    return(
      <Card style={{'marginTop': '1em', 'overflow': 'hidden'}}>
        <div className="row">
          <div className="PlaceH-avatar">
            <img src={ this.props.place.avatarImage } alt={'img-' + this.props.place.title} />
          </div>
          <div className="col-xs" style={{'textAlign':'left'}}>
            <CardHeader 
              title={this.props.place.title}
              subtitle={this.props.place.address}
            />
            <div className="row middle-xs">
              <div className="col-xs-6 col-sm-8 col-lg-9">
                <CardContent>{this.props.place.description}</CardContent>
              </div>
              <div className="col-xs">
                <CardActions>
                  <Link to={"/lugares/" + this.props.place.slug}>
                    <Button label="Ver más"/>
                  </Link>
                </CardActions>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}