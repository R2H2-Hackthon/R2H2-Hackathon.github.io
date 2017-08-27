import React, { Component } from 'react';
import MobileStepper from 'material-ui/MobileStepper';

import ButtonPlus from "../../components/ButtonPlus"
import TitleScreen from "../../components/TitleScreen";

import avatar from "./avatar.jpg";

const dependentes = [
    {name:"Carlinhos de Jesus", img:{avatar}, saldo:"R$ 500,05", ultimoLancamento:{
        data:"11/05/2017",
        descricao:"Compra de um lanche",
        valor: "R$ 30,00"
    }},
    {name:"Maria de Jesus", img:{avatar}, saldo:"R$ 450,50", ultimoLancamento:{
        data:"20/06/2017",
        descricao:"Compra de um notebook",
        valor: "R$ 1500,00"
    }}
]

class Dependentes extends Component {
    constructor() {
        super()

        this.state = {pos:0}
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
        return (
            <div>
                <TitleScreen title="Dependentes" />
                <ButtonPlus />

                <img src={avatar} style={{width:200, height:200}} />

                <p>{dependentes[pos].name}</p>
                <p>{dependentes[pos].saldo}</p>
                <p>
                    {dependentes[pos].ultimoLancamento.descricao}<br />
                    {dependentes[pos].ultimoLancamento.valor}<br />
                    {dependentes[pos].ultimoLancamento.data}
                </p>


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

export default Dependentes;