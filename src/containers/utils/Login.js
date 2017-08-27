import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { withRouter } from 'react-router-dom';

import Login from "../../components/Login";

import {login} from "../../actions"

class LoginController extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            password: ""
        }
    }

    componentWillMount(){
        document.querySelector("#visa-button").style.display = "none"
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    onSubmit = evt => {
        evt.preventDefault()

        this.props.login({email:this.state.nome})
    }

    render() {
        return (
            <Login nome={this.state.nome} titleName="Email" password={this.state.password} handleChange={this.handleChange} titlePassword="Password" onSubmit={this.onSubmit} />  
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login
    }, dispatch)
}
  
export default withRouter(connect(null, mapDispatchToProps)(LoginController));
