// @flow weak

import React, { Component } from 'react';
import "./Profile.css"
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';

import TitleScreen from "../../components/TitleScreen";

import avatar from "./avatar.jpg"

const user = {
  name: "Heitor, 18",
  saldo: "R$ 2673,83",
  email: "hi@heitorgouvea.me",
  desejos: [
    {descricao: "Viajar para Angola", porcentagem: 55}
  ]
}

class Profile extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    return (
      <div className="profile">
        <TitleScreen title="Perfil" />
        <Card>
          <img src={avatar} style={{width:200, height:200, borderRadius: "50%"}} />
          <CardMedia
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography type="headline" component="h2">
              {user.name}
            </Typography>
            <Typography component="p">
              {user.email}
            </Typography>

            <Typography component="p">
              <strong>Desejos: {user.desejos.map(desejo => {
                return (
                  <Typography component="p">
                    {desejo.descricao}
                  </Typography>
                )
              })}
              </strong>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Profile;
