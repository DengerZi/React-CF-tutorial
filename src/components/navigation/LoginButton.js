import React from 'react';
import Button from '@material-ui/core/Button';

export default class LoginButton extends React.Component {
  render(){
    return (
      <Button href="/login" style={{color: 'white'}}>Iniciar sesión</Button>
    )
  }
};
