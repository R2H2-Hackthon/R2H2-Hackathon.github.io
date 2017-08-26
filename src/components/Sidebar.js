import React from 'react';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import StarIcon from 'material-ui-icons/Star';

const Sidebar = (props) => {
    return (
        <Drawer
            open={props.openMenu}
            onRequestClose={props.handleOpenMenu}
            onClick={props.handleOpenMenu} >
            <List disablePadding>
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;