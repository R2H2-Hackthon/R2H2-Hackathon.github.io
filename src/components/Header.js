import React from 'react';
import {Link} from "react-router-dom";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
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
                <Typography type="title" color="inherit" style={{flex:1}}>
                    <Link to="/" style={{color:"white", textDecoration: "none"}}>
                        {props.title}
                    </Link>
                </Typography>
                <Link to="login" style={{color:"white", textDecoration: "none"}}>
                    {props.loginTitle}
                </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;