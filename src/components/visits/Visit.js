/** @format */

import React from "react";
import {
	Card,
	CardText,
	CardHeader,
	CardTitle,
	CardActions,
} from "material-ui/Card";
import FadeAndScale from '../animations/FadeAndScale'

export default class Visit extends React.Component {
	render() {
    return(
      <FadeAndScale in={this.props.in} >
        <div>
          <Card style={{ textAlign: "left", marginTop: '1em ' }}>
            <div className='col-xs'>
              <CardHeader
                title='Deng'
                subtitle={this.props.visit.observation}
                avatar={
                  "https://cdn.dribbble.com/users/258358/screenshots/3306125/artboard.png"
                }
                ></CardHeader>
            </div>
            <div className='col-xs-2 col-sm-1'></div>
          </Card>
        </div>
      </FadeAndScale>
    )
	}
}
