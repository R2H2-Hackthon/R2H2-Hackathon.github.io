import React from 'react';
import {Link} from "react-router-dom";
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';

import PanelSidebar from "./PanelSidebar";

const sidebar = [
    {link:"/", label:"Home", icon: <InboxIcon />},
    {link:"profile", label:"Perfil", icon: <InboxIcon />},
    {link:"missoes", label:"Missoes", icon: <InboxIcon />},
    {link:"ranking", label:"Ranking", icon: <InboxIcon />},
    {link:"dependentes", label:"Dependentes", icon: <InboxIcon />},
    {link:"Saldo", label:"Saldo", icon: <InboxIcon />}
]

const Sidebar = (props) => {
    return (
        <Drawer
            open={props.openMenu}
            onRequestClose={props.handleOpenMenu}
            onClick={props.handleOpenMenu} >

            <PanelSidebar user={props.user} />

            <List disablePadding>
                {sidebar.map(menu => {
                    return (
                        <Link to={menu.link} key={menu.label}>
                            <ListItem button>
                                <ListItemIcon>
                                  {menu.icon}
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
