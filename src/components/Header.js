import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const Header = (props) => {
    return (
        <div style={{width:"100%"}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="contrast" aria-label="Menu" onClick={props.handleOpenMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Typography type="title" color="inherit" style={{flex:1}}>
                        {props.title}
                    </Typography>
                    <Button color="contrast" onClick={props.onClickSair}>Sair</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
