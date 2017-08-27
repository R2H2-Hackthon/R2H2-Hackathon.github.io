import React, { Component } from 'react';

import ButtonPlus from "../../components/ButtonPlus";
import TitleScreen from "../../components/TitleScreen";

class Saldo extends Component {
    render() {
        return (
            <div>
                <TitleScreen title="Saldo/Extrato" />

                <ButtonPlus />
            </div>
        );
    }
}

export default Saldo;