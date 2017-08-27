import React from 'react';

import { ListItemIcon } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';

const ButtonMission = () => {
    return (
        <span className="center">
            <button style={{border: 1, borderRadius: '50%', width: 100, height: 100}}>
            <ListItemIcon style={{width: "100%"}}>
              <InboxIcon />
            </ListItemIcon>
            </button>
            <br/>
        </span>
    );
};

export default ButtonMission;
