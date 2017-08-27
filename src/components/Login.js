import React from 'react';
import './Login.css'
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';
import Button from 'material-ui/Button';

import logo from "./logo.png"

const Login = (props) => {
    return (
        <div className="login" style={{paddingTop:"50px 0", width:200, margin:"0 auto", boxShadow:"2px 2px 2px 2px #ccc", marginTop:"60px"}}>
            <img src={logo} alt="Logo App" style={{width:250, padding:10}}/><br/>
            <form onSubmit={props.onSubmit}>
                <FormControl>
                    <InputLabel htmlFor="name-simple">{props.titleName}</InputLabel>
                    <Input id="name-simple" value={props.nome} name="nome" onChange={props.handleChange} />
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
