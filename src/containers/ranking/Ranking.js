import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import TitleScreen from "../../components/TitleScreen";

class Ranking extends Component {
    render() {
        return (
            <div>
                <TitleScreen title="Ranking" />
                <Paper elevation={4}>
                    <Typography type="headline" component="h3">
                        This is a sheet of paper.
                    </Typography>
                    <Typography type="body1" component="p">
                        Paper can be used to build surface or other elements for your application.
                    </Typography>
                </Paper>
            </div>
        );
    }
}

export default Ranking;