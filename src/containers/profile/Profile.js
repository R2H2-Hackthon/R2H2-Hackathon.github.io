// @flow weak

import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { withRouter } from 'react-router-dom'

import "./Profile.css"
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';

import TitleScreen from "../../components/TitleScreen";

import avatar from "./avatar.jpg"

class Profile extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const {user} = this.props
    return (
      <div className="center">
        <TitleScreen title="Perfil" />
        <Card>
          <img src={user.avatar} style={{width:200, height:200, borderRadius: "50%"}} />
          <CardMedia
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography type="headline" component="h2">
              {user.nome}
            </Typography>
            <Typography component="p">
              {user.email}
            </Typography>

            <Typography component="p">
              <strong>Desejos: {user.desejos ? user.desejos.map((desejo,key) => {
                return (
                  <Typography component="p" key={key} >
                    {desejo.descricao}
                  </Typography>
                )
              }) : ""}
              </strong>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      ...state
  }
}

export default withRouter(connect(mapStateToProps)(Profile));