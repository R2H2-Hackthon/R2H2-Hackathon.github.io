import React, { Component } from 'react';

//Components
import Header from "../components/Header"
import Login from "../components/Login"
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

                <Login nome={this.state.nome} titleName="Nome" password={this.state.password} handleChange={this.handleChange}  />                

            </div>
        );
    }
}

export default App;