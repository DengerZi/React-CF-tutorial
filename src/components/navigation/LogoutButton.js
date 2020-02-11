import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class LogoutButton extends React.Component {
  render(){
    return (
      <IconMenu
      iconButtonElement={<IconButton iconStyle={{'fill': 'white'}}><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Cerrar sesión" onClick={this.props.logout} />
    </IconMenu>
    )
  }
};
