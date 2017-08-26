import React from 'react';
import './Login.css'
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';
import Button from 'material-ui/Button';

const Login = (props) => {
    return (
        <div className="login">
            <img src="https://avatars1.githubusercontent.com/u/19806761?v=4&s=200" alt="Logo App"/>
            <FormControl>
                <InputLabel htmlFor="name-simple">{props.titleName}</InputLabel>
                <Input id="name-simple" value={props.nome} name="name" onChange={props.handleChange} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="name-simple">{props.titlePassword}</InputLabel>
                <Input id="passower-simple" value={props.password} type="password" name="password" onChange={props.handleChange} />
                <br/>
                <Button raised color="primary">Login</Button>
            </FormControl>
        </div>
    );
};

export default Login;
