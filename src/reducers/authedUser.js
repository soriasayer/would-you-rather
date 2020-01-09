import { AUTHED_USER, LOGOUT_USER } from '../actions/authedUser'

export default function authedUser(state = '', action) {
    switch(action.type) {
        case AUTHED_USER :
            return action.name
        case LOGOUT_USER :
            return action.name
    default : 
        return state
    }
}