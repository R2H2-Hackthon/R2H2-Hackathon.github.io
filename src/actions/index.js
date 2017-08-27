import axios from "axios";

//Constants
import * as constants from "../constants"

const GET_USER_PROFILE = "GET_USER_PROFILE"

export function getUserProfile() {
    return dispatch => {
        axios.get(`${constants.URL_BACK}/v1/usuarios/1`)
             .then(function(response)  {
                 dispatch({
                     type: GET_USER_PROFILE,
                     payload: response.data
                 })
             })
             .catch(function(erro) {
                console.log("erro", erro)
             })
    }
}