import React, { Component } from 'react';

import Login from "../../components/Login"

import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: ""
    }
  }

  handleChange = (evt) => {
    this.setState({
      name: evt.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Login name={this.state.name} titleName="Nome" handleChange={this.handleChange}  />
      </div>
    );
  }
}

export default App;
