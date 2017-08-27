import {GET_USER_PROFILE} from "../constants"

const getInitialState = {}

export default function(state=getInitialState, action) {
    switch(action.type) {
        case GET_USER_PROFILE: {
            return {
                ...action.payload
            }
        }

        default:
            return state
    }
}