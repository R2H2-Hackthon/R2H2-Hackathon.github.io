import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { withRouter } from 'react-router-dom';
import MobileStepper from 'material-ui/MobileStepper';
import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog';
import Button from 'material-ui/Button';

import ButtonPlus from "../../components/ButtonPlus"
import TitleScreen from "../../components/TitleScreen";
import CadastroUser from "./CadastroUser";

//Actions
import {getUsers,addUser,insertCartaoUser,removeDependente} from "../../actions"

class Dependentes extends Component {
    constructor() {
        super()

        this.state = {pos:0, open:false}
    }

    componentWillMount() {
        this.props.getUsers()
        document.querySelector("#visa-button").style.display = "none"
    }

    handleNext = () => {
        this.setState({
          pos: this.state.pos + 1,
        });
      };

    handleBack = () => {
        this.setState({
            pos: this.state.pos - 1,
            open: false,
        });
    };

    handleRequestClose = () => {
        this.setState({ open: !this.state.open });
    };

    onChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    onFormSubmit = evt => {
        evt.preventDefault()

        this.setState({ open: false });
        this.props.addUser(this.state)
    }

    render() {
        const {pos} = this.state
        const {dependentes} = this.props.user
        return (
            <div className="center">
                <TitleScreen title="Dependentes" />
                <ButtonPlus onClick={this.handleRequestClose} />

                {dependentes.length > 0 ?
                    <span>
                        <img src={dependentes[pos].avatar} alt="imagem do usuário" style={{width:200, height:200, borderRadius: "50%"}} />
                        <p>{dependentes[pos].nome}</p>
                        <p>{dependentes[pos].email}</p>
                        <p>{dependentes[pos].dataNascimento}</p>
                        <p>
                            {dependentes[pos].cartoes_vinculados.length === 0 ?
                                <Button raised color="accent" onClick={() => this.props.insertCartaoUser({id:dependentes[pos].id})}>
                                    Adicionar cartão
                                </Button>
                            :<strong>Cartão: {dependentes[pos].cartoes_vinculados[0]}</strong>
                        }</p>
                        <p>
                            <Button raised color="primary" onClick={() => this.props.removeDependente({id:dependentes[pos].id})}>
                                Remover Dependente
                            </Button>
                        </p>
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

                <Dialog onRequestClose={this.handleRequestClose} {...this.state}>
                    <DialogTitle>Cadastro de um novo dependente</DialogTitle>
                    <DialogContent>
                        <CadastroUser {...this.state} onChange={this.onChange} handleRequestClose={this.handleRequestClose} onFormSubmit={this.onFormSubmit}/>
                    </DialogContent>
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
        getUsers,
        addUser,
        insertCartaoUser,
        removeDependente
    }, dispatch)
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dependentes));