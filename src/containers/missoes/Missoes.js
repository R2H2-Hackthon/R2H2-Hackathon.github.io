import React, { Component } from 'react';
import "./Missoes.css";
import ButtonMission from "../../components/ButtonMission"
import TitleScreen from "../../components/TitleScreen";

class Missoes extends Component {
    render()
        return (
            <div className="quest-list">
                <TitleScreen title="Missões" />
                <div className="quest-item" style={{textAlign:"center"}}>
                    <ButtonMission />
                    <h5 className="quest-list">  Lorem Ipsum </h5>
                </div>
                <div className="quest-item" style={{textAlign:"center"}}>
                    <ButtonMission />
                    <h5 className="quest-list">  Lorem Ipsum </h5>
                </div>
                <div className="quest-item" style={{textAlign:"center"}}>
                    <ButtonMission />
                    <h5 className="quest-list">  Lorem Ipsum </h5>
                </div>
                <div className="quest-item" style={{textAlign:"center"}}>
                    <ButtonMission />
                    <h5 className="quest-list">  Lorem Ipsum </h5>
                </div>
                <div className="quest-item" style={{textAlign:"center"}}>
                    <ButtonMission />
                    <h5 className="quest-list">  Lorem Ipsum </h5>
                </div>
                <div className="quest-item" style={{textAlign:"center"}}>
                    <ButtonMission />
                    <h5 className="quest-list">  Lorem Ipsum </h5>
                </div>
            </div>
        );
    }
}

export default Missoes;
