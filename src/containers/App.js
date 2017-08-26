import React, { Component } from 'react';

//Components
import Sidebar from "../components/Sidebar"

class App extends Component {
    constructor() {
        super()

        this.state = {}
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
            </div>
        );
    }
}

export default App;