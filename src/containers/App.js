import React, { Component } from 'react';

//Components
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
                <Sidebar openMenu={this.state.openMenu} handleOpenMenu={this.handleOpenMenu} />

                <button onClick={this.handleOpenMenu}>Menu</button>

                <Login nome={this.state.nome} titleName="Nome" password={this.state.password} handleChange={this.handleChange}  />                

            </div>
        );
    }
}

export default App;