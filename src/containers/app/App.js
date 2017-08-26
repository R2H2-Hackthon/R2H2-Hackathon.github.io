import React, { Component } from 'react';

import Login from "../../components/Login"

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

  render() {
    return (
      <div className="App">
        <Login nome={this.state.nome} titleName="Nome" password={this.state.password} handleChange={this.handleChange}  />
      </div>
    );
  }
}

export default App;
