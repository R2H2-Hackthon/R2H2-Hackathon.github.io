import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const Header = (props) => {
    return (
        <div style={{width:"100%"}}>
            <AppBar position="static">
                <Toolbar>
                <IconButton color="contrast" aria-label="Menu" onClick={props.handleOpenMenu}>
                    <MenuIcon />
                </IconButton>
                <Button color="contrast">{props.loginTitle}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
