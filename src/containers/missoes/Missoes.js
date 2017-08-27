import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import Dialog, { DialogTitle, DialogContent, DialogContentText } from 'material-ui/Dialog';

import "./Missoes.css";

import ButtonMission from "../../components/ButtonMission"
import TitleScreen from "../../components/TitleScreen";

//Actions
import {getMissions} from "../../actions"

class Missoes extends Component {
    constructor(){
        super()

        this.state={open:false}
    }

    componentWillMount() {
        this.props.getMissions()
        document.querySelector("#visa-button").style.display = "none"
    }

    handleRequestClose = evt => {
        this.setState({
            open: false
        })
    }

    handleOpenMission = missao => {
        this.setState({
            open: true,
            missao
        })
    }

    render() {
        const {missoes=[]} = this.props.user
        const {missao={}} = this.state
        
        return (
            <div className="quest-list">
                <TitleScreen title="Missões" />
                {missoes.map(missao => {
                    return (
                        <div className="quest-item" style={{textAlign:"center"}} key={missao.id}>
                            <ButtonMission onClick={() => this.handleOpenMission(missao)} />
                            <h5 className="quest-list">
                                {missao.titulo}<br/>
                                {`${missao.pontuacao} pontos`}
                            </h5>
                        </div>
                    )
                })}

                <Dialog onRequestClose={this.handleRequestClose} {...this.state}>
                    <DialogTitle>{missao.titulo}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {missao.descricao}
                        </DialogContentText>
                    </DialogContent>
                    <h3 style={{textAlign:"center"}}>
                        {`${missao.pontuacao} pontos`}
                    </h3>
                </Dialog>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMissions
    }, dispatch)
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Missoes));