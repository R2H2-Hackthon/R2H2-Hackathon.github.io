import React, { Component } from 'react';

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
    render() {
        const {pos} = this.state
        return (
            <div>
                <TitleScreen title="Dependentes" />

                <img src={avatar} style={{width:200, height:200}} />

                <p>{dependentes[pos].name}</p>
                <p>{dependentes[pos].saldo}</p>
                <p>
                    {dependentes[pos].ultimoLancamento.descricao}<br />
                    {dependentes[pos].ultimoLancamento.valor}<br />
                    {dependentes[pos].ultimoLancamento.data}
                </p>

            </div>
        );
    }
}

export default Dependentes;