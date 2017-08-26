import React from 'react';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';

const Login = (props) => {
    return (
        <div>
            <FormControl>
                <InputLabel htmlFor="name-simple">{props.titleName}</InputLabel>
                <Input id="name-simple" value={props.name} onChange={props.handleChange} />
            </FormControl>
        </div>
    );
};

export default Login;