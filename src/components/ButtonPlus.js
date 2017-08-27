import React from 'react';

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

const ButtonPlus = () => {
    return (
        <Button fab color="primary" aria-label="add" style={{position:"fixed", right:10, bottom:10}}>
            <AddIcon />
        </Button>
    );
};

export default ButtonPlus;