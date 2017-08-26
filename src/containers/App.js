import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

//Components
import Main from "./main/Main"
import Profile from "./profile/Profile"
import Header from "../components/Header"
import Login from "./utils/Login"
import Sidebar from "../components/Sidebar"

class App extends Component {
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

    handleOpenMenu = () => {
        this.setState({
            openMenu: !this.state.openMenu
        })
    }

    render() {
        return (
            <div>
                <Header title="GrowUp" loginTitle="Login" handleOpenMenu={this.handleOpenMenu} />

                <Sidebar openMenu={this.state.openMenu} handleOpenMenu={this.handleOpenMenu} />              
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/profile' component={Profile}/>
                </Switch>

            </div>
        );
    }
}

export default App;