import React, { Component } from 'react';

import Login from "../../components/Login";

class LoginController extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            password: ""
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        return (
            <Login nome={this.state.nome} titleName="Nome" password={this.state.password} handleChange={this.handleChange}  />  
        );
    }
}

export default LoginController;