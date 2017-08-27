// @flow weak

import React, { Component } from 'react';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';

import TitleScreen from "../../components/TitleScreen";

import avatar from "./avatar.jpg"

const user = {
  name: "Filho do pai que cadastrou",
  saldo: "R$ 1000,00",
  email: "filho@son.com",
  desejos: [
    {descricao:"Ir a praia", porcentagem: 55},
    {descricao:"Comprar um carro", porcentagem: 15},
    {descricao:"Ser rico", porcentagem: 5},
  ]
}

class Profile extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    return (
      <div>
        <TitleScreen title="Perfil" />
        <Card>
          <img src={avatar} style={{width:200, height:200}} />
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
              <strong>Desejos</strong>
            </Typography>
            {user.desejos.map(desejo => {
              return (
                <Typography component="p">
                  {desejo.descricao}
                </Typography>
              )
            })}
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Profile;
