import React from 'react';
import Avatar from 'material-ui/Avatar';

const PanelSidebar = (props) => {
    return (
        <div>
            <Avatar alt={`avatar ${props.user.nome}`} src={props.user.avatar} />{` ${props.user.nome}`}
        </div>
    );
};

export default PanelSidebar;