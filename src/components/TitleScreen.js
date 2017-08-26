import React from 'react';

const TitleScreen = (props) => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>{props.title}</h1>
        </div>
    );
};

export default TitleScreen;