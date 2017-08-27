import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Main from "./main/Main";
import Profile from "./profile/Profile";
import Ranking from "./ranking/Ranking";
import Login from "./utils/Login";
import Dependentes from "./dependentes/Dependentes";
import Missoes from "./missoes/Missoes";
import Saldo from "./saldo/Saldo";

//Components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import './App.css';

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
                <Header title="GrowUp" handleOpenMenu={this.handleOpenMenu} />
                <Sidebar openMenu={this.state.openMenu} handleOpenMenu={this.handleOpenMenu} />
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/dependentes' component={Dependentes}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/missoes' component={Missoes}/>
                    <Route exact path='/profile' component={Profile}/>
                    <Route exact path='/ranking' component={Ranking}/>
                    <Route exact path='/saldo' component={Saldo}/>
                </Switch>
              </div>
        );
    }
}

export default App;
