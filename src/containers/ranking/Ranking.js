import React, { Component } from 'react';
import Card, { CardHeader } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

import TitleScreen from "../../components/TitleScreen";

const users = [
    {pos:1, name: "User 1", pontos:10050, missoes:10},
    {pos:2, name: "User 2", pontos:9995, missoes:8},
    {pos:3, name: "User 3", pontos:9950, missoes:10},
    {pos:4, name: "User 4", pontos:8050, missoes:7},
    {pos:5, name: "User 5", pontos:8000, missoes:7},
    {pos:6, name: "User 6", pontos:7100, missoes:10},
    {pos:7, name: "User 7", pontos:7000, missoes:10},
    {pos:8, name: "User 8", pontos:6500, missoes:8},
    {pos:9, name: "User 9", pontos:6000, missoes:10},
    {pos:10, name: "User 10", pontos:6000, missoes:5},
    {pos:11, name: "User 11", pontos:5000, missoes:1},
]

class Ranking extends Component {
    render() {
        return (
            <div>
                <TitleScreen title="Ranking" />

                {users.map(user => {
                    return (
                        <div className="padding-vertical half-padding-horizontal">
                            <Card>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="Recipe">
                                            {user.pos}
                                        </Avatar>
                                    }
                                    title={user.name}
                                    subheader={`Pontos: ${user.pontos} | Missões: ${user.missoes}`}
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

export default Ranking;
