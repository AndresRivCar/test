import React from 'react';
import IconButton from '@mui/material/IconButton';
import Icon from '@material-ui/core/Icon';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const User = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleLogout = () => {

    };

    return(
        <div>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <Icon>account_circle</Icon>
            </IconButton>
            <Menu 
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                <MenuItem disabled>Andres</MenuItem>
                <MenuItem onClick={handleLogout}>Salir</MenuItem>
            </Menu>
        </div>
    );
};

export default User;