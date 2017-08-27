import React, { Component } from 'react';
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import { LinearProgress } from 'material-ui/Progress';
import Chip from 'material-ui/Chip';

import './Main.css';

import background from "./background.png";

class Main extends Component {
  constructor() {
    super()

    this.state = {}
  }

  componentWillMount() {
    document.querySelector("#visa-button").style.display = "none"
  }

  renderFilho() {
    return (
      <Typography type="body1" style={{margin:"0 auto", width:250}}>
        <h1 style={{fontSize:20}}>Saldo: R$ 200,00</h1>
        <h2 style={{fontSize:16}}>Voce já concluiu 50% da sua meta</h2>
        <Chip label="Economizar R$100"/>
        <LinearProgress mode="buffer" value={50} />
        <br/>
        {this.metasConcluidas()}
      </Typography>
    )
  }

  metasConcluidas() {
    return (
      <span>
        <Typography type="body1">
          <strong>Metas concluídas</strong>
        </Typography>
        <Chip label="Doação de R$100: 25 pontos"/>
        <Chip label="Compra de material escolar: 30 pontos"/>
        <Chip label="Vender moveis: 40 pontos"/>
      </span>
    )
  }

  render() {
    const {user} = this.props
    return (
      <div>
        <img src={background} width="100%" style={{maxHeight:300}} alt="background da home" />
        {user.papel === "filho" ?
          this.renderFilho() :""}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      ...state
  }
}

export default withRouter(connect(mapStateToProps)(Main));