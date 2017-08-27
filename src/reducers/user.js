import * as constants from "../constants"

const getInitialState = {
    dependentes:[]
}

export default function(state=getInitialState, action) {
    switch(action.type) {
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

        default:
            return state
    }
}