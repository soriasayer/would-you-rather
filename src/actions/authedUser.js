
export const AUTHED_USER = 'AUTHED_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export function setAuthedUser(name) {
    return{
        type: AUTHED_USER,
        name
    }
}

export function logoutUser(name) {
    return{
        type: LOGOUT_USER,
        name
    }
}
