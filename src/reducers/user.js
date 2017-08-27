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
                ...action.payload,
                logado: true
            }
        }

        case constants.GET_USERS: {
            return {
                ...state,
                dependentes: action.payload
            }
        }

        case constants.SAIR: {
            return {
                ...state,
                logado: false
            }
        }

        case constants.GET_CARDS: {
            return {
                ...state,
                cartoes: action.payload
            }
        }

        case constants.GET_MISSIONS: {
            return {
                ...state,
                missoes: action.payload
            }
        }

        case constants.INSERT_CARTAO_USER: {
            return {
                ...state,
                dependentes: action.payload,
                showMessage: true,
                message: "Ação realizada com sucesso"
            }
        }

        case constants.ERROR_API: {
            return {
                ...state,
                showMessage: true,
                message: "Erro ao realizar a operação"
            }
        }

        case constants.REMOVE_DEPENDENTE: {
            return {
                ...state,
                dependentes: action.payload,
                showMessage: true,
                message: "Removido com sucesso"
            }
        }

        case constants.LOGIN: {
            return {
                ...state,
                logado: true
            }
        }

        default:
            return state
    }
}