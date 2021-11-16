import { customerConstants } from "../constants";

const initialState = {}

export function authentication(state = initialState, action) {
    switch (action.type) {
        case customerConstants.LOGIN_REQUEST:
            return {
                loggedIn: false,
                loading: true,
                user: action.user
            }
        case customerConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                loading: false,
                user: action.user
            }
        case customerConstants.LOGIN_FAILURE: 
            return {
                loggedIn: false,
                loading: false,
            }
        case customerConstants.LOGOUT: 
            return {}
        default:
            return state
    }
}