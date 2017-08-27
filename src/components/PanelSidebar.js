import React from 'react';
import Avatar from 'material-ui/Avatar';
import "./PanelSidebar.css";

const PanelSidebar = (props) => {
    return (
        <div className="profileSideBar">
            <Avatar alt={`avatar ${props.user.nome}`} src={props.user.avatar} />
            <h4>{` ${props.user.nome}`}</h4>
        </div>
    );
};

export default PanelSidebar;
