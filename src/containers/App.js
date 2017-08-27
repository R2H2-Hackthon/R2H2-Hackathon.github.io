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

import logo from "./logo.png";
import logoInverse from "./logo-inverse.png";

import './App.css';

const user = {
    name: "Heitor, 18",
    saldo: "R$ 2673,83",
    email: "hi@heitorgouvea.me",
    desejos: [
      {descricao: "Viajar para Angola", porcentagem: 55}
    ]
  }

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
                <Header title={<img src={logoInverse} width="230px" />} handleOpenMenu={this.handleOpenMenu} />
                <Sidebar openMenu={this.state.openMenu} handleOpenMenu={this.handleOpenMenu} user={user} />
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
