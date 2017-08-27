import React, { Component } from 'react';

import ButtonMission from "../../components/ButtonMission"
import TitleScreen from "../../components/TitleScreen";

class Missoes extends Component {
    render() {
        return (
            <div>
                <TitleScreen title="Missões" />
                <div className="col-md-2" style={{textAlign:"center"}}>
                    <ButtonMission />
                </div>
                <div className="col-md-2" style={{textAlign:"center"}}>
                    <ButtonMission />
                </div>
                <div className="col-md-2" style={{textAlign:"center"}}>
                    <ButtonMission />
                </div>
            </div>
        );
    }
}

export default Missoes;