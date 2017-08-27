import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';

const Header = (props) => {
    return (
        <div style={{width:"100%"}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="contrast" aria-label="Menu" onClick={props.handleOpenMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Typography type="title" color="inherit">
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
