import * as constants from "../constants"

const getInitialState = {
    dependentes:[],
    showMessage: false,
    message: "Bem vindo"
}

export default function(state=getInitialState, action) {
    switch(action.type) {
        case constants.CLOSE_MESSAGE: {
            return {
                ...state,
                showMessage: false
            }
        }

        case constants.ADD_USER: {
            return {
                ...state,
                dependentes: [action.payload, ...state.dependentes],
                showMessage: true,
                message: "Cadastro efetuado com sucesso"
            }
        }

        case constants.GET_USER_PROFILE: {
            return {
                ...state,
                ...action.payload
            }
        }

        case constants.GET_USERS: {
            return {
                ...state,
                dependentes: action.payload
            }
        }

        case constants.GET_CARDS: {
            return {
                ...state,
                cartoes: action.payload
            }
        }

        default:
            return state
    }
}