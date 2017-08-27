import axios from "axios";

//Constants
import * as constants from "../constants"

export function getUserProfile() {
    return dispatch => {
        axios.get(`${constants.URL_BACK}/v1/usuarios/1`)
             .then(function(response)  {
                 dispatch({
                     type: constants.GET_USER_PROFILE,
                     payload: response.data
                 })
             })
             .catch(function(erro) {
                console.log("erro", erro)
             })
    }
}

export function getUsers() {
    return dispatch => {
        axios.get(`${constants.URL_BACK}/v1/usuarios`)
             .then(function(response)  {
                 dispatch({
                     type: constants.GET_USERS,
                     payload: response.data
                 })
             })
             .catch(function(erro) {
                console.log("erro", erro)
             })
    }
}