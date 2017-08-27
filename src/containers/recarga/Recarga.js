import "./Recarga.css"

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import MobileStepper from 'material-ui/MobileStepper';
import Card, { CardHeader } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import TitleScreen from "../../components/TitleScreen";

//Actions
import {getUsers} from "../../actions"

class Recarga extends Component {
    constructor() {
        super()

        this.state = {pos:0, open:false}
    }

    componentWillMount() {
        this.props.getUsers()
        document.querySelector("#visa-button").style.display = "block"
    }

    handleNext = () => {
        this.setState({
          pos: this.state.pos + 1,
        });
      };

    handleBack = () => {
        this.setState({
            pos: this.state.pos - 1,
        });
    };

    render() {
        const {pos} = this.state
        const {dependentes} = this.props.user
        return (
            <div className="visa-button">
                <TitleScreen title="Recarga de cartão" />

                <Card>
                    <CardHeader
                        avatar={<div style={{background: "#FF4081", padding:10, color:"white", borderRadius:50 }}>R$ 500,00</div>}
                        title="Orçamento"
                    />
                </Card>
                <Divider inset />

                <Card>
                    <CardHeader
                    avatar={<div style={{background: "#1B7EDB", padding:10, color:"white", borderRadius:50 }}>R$ 200,00</div>}
                        title="Meta"
                    />
                </Card>

                <br />
                <br/>

                {dependentes.length > 0 ?
                    <span>
                        <img src={dependentes[pos].avatar} alt="imagem do usuário" style={{width:200, height:200, borderRadius: "50%"}} />
                        <p>{dependentes[pos].nome}</p>
                        <p>{dependentes[pos].email}</p>
                        <p>{dependentes[pos].dataNascimento}</p>
                    </span>
                : ""}

                <MobileStepper
                    type="text"
                    steps={dependentes.length}
                    position="static"
                    activeStep={this.state.pos}
                    onBack={this.handleBack}
                    onNext={this.handleNext}
                    disableBack={this.state.pos === 0}
                    disableNext={this.state.pos === dependentes.length-1}
                />

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
        getUsers,
    }, dispatch)
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recarga));