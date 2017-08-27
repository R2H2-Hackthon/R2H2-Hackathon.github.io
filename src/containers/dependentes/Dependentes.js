import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { withRouter } from 'react-router-dom';
import MobileStepper from 'material-ui/MobileStepper';
import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog';

import ButtonPlus from "../../components/ButtonPlus"
import TitleScreen from "../../components/TitleScreen";
import CadastroUser from "./CadastroUser";

//Actions
import {getUsers,addUser} from "../../actions"

import avatar from "./avatar.jpg";

class Dependentes extends Component {
    constructor() {
        super()

        this.state = {pos:0, open:false}
    }

    componentWillMount() {
        this.props.getUsers()
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
                        <img src={dependentes[pos].avatar} style={{width:200, height:200, borderRadius: "50%"}} />
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

                <Dialog onRequestClose={this.handleRequestClose} {...this.state}>
                    <DialogTitle>Cadastro de um novo dependente</DialogTitle>
                    <DialogContent>
                        <CadastroUser {...this.state} onChange={this.onChange} onFormSubmit={this.onFormSubmit}/>
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
        addUser
    }, dispatch)
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dependentes));