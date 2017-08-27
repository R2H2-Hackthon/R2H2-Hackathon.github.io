import axios from "axios";

//Constants
import * as constants from "../constants"

export function addUser(user) {
    return dispatch => {
        axios.post(`${constants.URL_BACK}/v1/usuarios`, user)
             .then(function(response)  {
                 dispatch({
                     type: constants.ADD_USER,
                     payload: response.data
                 })
             })
             .catch(function(erro) {
                console.log("erro", erro)
             })
    }
}


export function closeMessage() {
    return {
        type: constants.CLOSE_MESSAGE
    }
}

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

export function getCards() {
    return dispatch => {
        axios.get(`${constants.URL_BACK}/v1/cartoes`)
             .then(function(response)  {
                 dispatch({
                     type: constants.GET_CARDS,
                     payload: response.data
                 })
             })
             .catch(function(erro) {
                console.log("erro", erro)
             })
    }
}

export function getMissions() {
    return dispatch => {
        axios.get(`${constants.URL_BACK}/v1/missoes`)
             .then(function(response)  {
                 dispatch({
                     type: constants.GET_MISSIONS,
                     payload: response.data
                 })
             })
             .catch(function(erro) {
                console.log("erro", erro)
             })
    }
}