import React from 'react';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';

const Login = (props) => {
    return (
        <div>
            <img src="https://avatars1.githubusercontent.com/u/19806761?v=4&s=200" alt="Logo App"/>
            <FormControl>
                <InputLabel htmlFor="name-simple">{props.titleName}</InputLabel>
                <Input id="name-simple" value={props.nome} name="name" onChange={props.handleChange} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="name-simple">{props.titlePassword}</InputLabel>
                <Input id="passower-simple" value={props.password} name="password" onChange={props.handleChange} />
            </FormControl>
        </div>
    );
};

export default Login;
