import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVert from '@material-ui/icons/MoreVert';

export default class LogoutButton extends React.Component {
  render(){
    return (
      <Menu
      iconButtonElement={<IconButton iconStyle={{'fill': 'white'}}><MoreVert /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Cerrar sesión" onClick={this.props.logout} />
    </Menu>
    )
  }
};
