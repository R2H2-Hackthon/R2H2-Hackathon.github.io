import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { withRouter } from 'react-router-dom';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

import Main from "./main/Main";
import Profile from "./profile/Profile";
import Ranking from "./ranking/Ranking";
import Login from "./utils/Login";
import Dependentes from "./dependentes/Dependentes";
import Missoes from "./missoes/Missoes";
import Saldo from "./saldo/Saldo";

//Components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

//Actions
import {closeMessage,getUserProfile} from "../actions"

//Utils
import logoInverse from "./logo-inverse.png";
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            password: ""
        }
    }

    componentWillMount() {
        this.props.getUserProfile()
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleOpenMenu = () => {
        this.setState({
            openMenu: !this.state.openMenu
        })
    }

    render() {
        const {user} = this.props
        return (
            <div>
                <Header title={<img src={logoInverse} width="230px" alt="Logo GrowUp" />} handleOpenMenu={this.handleOpenMenu} />
                <Sidebar openMenu={this.state.openMenu} handleOpenMenu={this.handleOpenMenu} user={user} />

                <Snackbar
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    onRequestClose={this.props.closeMessage}
                    open={user.showMessage}
                    autoHideDuration={6e3}
                    SnackbarContentProps={{
                    'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{user.message}</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={this.props.closeMessage} >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />


                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/dependentes' component={Dependentes}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/missoes' component={Missoes}/>
                    <Route exact path='/profile' component={Profile}/>
                    <Route exact path='/ranking' component={Ranking}/>
                    <Route exact path='/saldo' component={Saldo}/>
                </Switch>
              </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        closeMessage,
        getUserProfile
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
