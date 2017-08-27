import React from 'react';
import './Login.css'
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';
import Button from 'material-ui/Button';

const Login = (props) => {
    return (
        <div className="login">
            <img src="https://avatars1.githubusercontent.com/u/19806761?v=4&s=200" alt="Logo App"/><br/>
            <form onSubmit={props.onSubmit}>
                <FormControl>
                    <InputLabel htmlFor="name-simple">{props.titleName}</InputLabel>
                    <Input id="name-simple" value={props.nome} name="name" onChange={props.handleChange} />
                </FormControl><br/>
                <FormControl>
                    <InputLabel htmlFor="name-simple">{props.titlePassword}</InputLabel>
                    <Input id="passower-simple" value={props.password} type="password" name="password" onChange={props.handleChange} />
                </FormControl>
                <br/>
                <br/>
                <Button raised color="primary" type="submit">Login</Button>
            </form>
        </div>
    );
};

export default Login;
