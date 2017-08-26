import React from 'react';
import {Link} from "react-router-dom";
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';

const sidebar = [
    {link:"/", label:"Home"},
    {link:"profile", label:"Perfil"},
    {link:"missoes", label:"Missoes"},
    {link:"ranking", label:"Ranking"},
    {link:"dependentes", label:"Dependentes"},
    {link:"Saldo", label:"Saldo"},
]

const Sidebar = (props) => {
    return (
        <Drawer
            open={props.openMenu}
            onRequestClose={props.handleOpenMenu}
            onClick={props.handleOpenMenu} >
            <List disablePadding>
                {sidebar.map(menu => {
                    return (
                        <Link to={menu.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={menu.label} />
                            </ListItem>
                        </Link>
                    )
                })}
            </List>
        </Drawer>
    );
};

export default Sidebar;