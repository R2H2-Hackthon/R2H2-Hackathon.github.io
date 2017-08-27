import React from 'react';
import Avatar from 'material-ui/Avatar';

import avatar from "./avatar.jpg"

const PanelSidebar = (props) => {
    return (
        <div>
            <Avatar alt="Remy Sharp" src={avatar} />{` ${props.user.name}`}
        </div>
    );
};

export default PanelSidebar;