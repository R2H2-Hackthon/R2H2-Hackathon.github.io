import React, { Component } from 'react';
import Card, { CardHeader } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

import ButtonPlus from "../../components/ButtonPlus";
import TitleScreen from "../../components/TitleScreen";

const extratos = [
    {data:"11/07/2017", valor:"100.00", local:"Padaria tiao", cidade:"Campinas", uf:"SP"},
    {data:"11/07/2017", valor:"100.00", local:"Padaria tiao", cidade:"Campinas", uf:"SP"},
    {data:"11/07/2017", valor:"-100.00", local:"Padaria tiao", cidade:"Campinas", uf:"SP"},
    {data:"11/07/2017", valor:"100.00", local:"Padaria tiao", cidade:"Campinas", uf:"SP"},
    {data:"11/07/2017", valor:"100.00", local:"Padaria tiao", cidade:"Campinas", uf:"SP"},
    {data:"11/07/2017", valor:"100.00", local:"Padaria tiao", cidade:"Campinas", uf:"SP"}
]

class Saldo extends Component {
    render() {
        return (
            <div>
                <TitleScreen title="Saldo/Extrato" />
                <ButtonPlus />

                {extratos.map((extrato,key) => {
                    return (
                        <div className="padding-vertical half-padding-horizontal" key={key}>
                            <Card>
                                <CardHeader
                                    avatar={<div style={{background: extrato.valor < 0 ?"#FF4081": "#1B7EDB", padding:10, color:"white", borderRadius:50 }}>{extrato.valor}</div>}
                                    title={extrato.local}
                                    subheader={`Cidade: ${extrato.cidade} - ${extrato.uf}`}
                                />
                            </Card>
                            <Divider inset />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Saldo;