/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Card, CardText } from 'material-ui/Card';

import {redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors';

export default class Benefit extends React.Component {
    
    render() {
        return(
            <ul>
                    <Card className="Header-benefit">
                        <CardText>
                        <div className="row">
                            <div className="Header-benefit-image" style={{'backgroundColor': redA400}}>
                            <img src={process.env.PUBLIC_URL + '/images/gift.png'} />
                            </div>
                            <div className="Header-benefit-content">
                            <h3>Calificaciones con emociones</h3>
                            <p>Califica tus lugares con experiencias, no con números</p>
                            </div>
                        </div>
                        </CardText>
                    </Card>

                    <Card className="Header-benefit">
                        <CardText>
                        <div className="row">
                            <div className="Header-benefit-image" style={{'backgroundColor': lightBlueA400}}>
                            <img src={process.env.PUBLIC_URL + '/images/no-internet.png'} />
                            </div>
                            <div className="Header-benefit-content">
                            <h3>¿Sin internet? Sin problemas</h3>
                            <p>Places funciona sin internet o en conexiones lentas</p>
                            </div>
                        </div>
                        </CardText>
                    </Card>

                    <Card className="Header-benefit">
                        <CardText>
                        <div className="row">
                            <div className="Header-benefit-image" style={{'backgroundColor': amberA400}}>
                            <img src={process.env.PUBLIC_URL + '/images/star.png'} />
                            </div>
                            <div className="Header-benefit-content">
                            <h3>¿No sabes a donde ir? Tus lugares favoritos</h3>
                            <p>Define tu lista de sitios favoritos</p>
                            </div>
                        </div>
                        </CardText>
                    </Card>

                    </ul>
        );
    }
}