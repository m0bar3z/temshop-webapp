import { customerConstants, sellerConstants } from "../constants";

const initialState = {}

export function authentication(state = initialState, action) {
    switch (action.type) {
        case customerConstants.LOGIN_REQUEST || sellerConstants.LOGIN_REQUEST:
            return {
                loggedIn: false,
                loading: true,
                user: action.user
            }
        case customerConstants.LOGIN_SUCCESS || sellerConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                loading: false,
                user: action.user
            }
        case customerConstants.LOGIN_FAILURE || sellerConstants.LOGIN_FAILURE: 
            return {
                loggedIn: false,
                loading: false,
            }
        case customerConstants.LOGOUT || sellerConstants.LOGOUT: 
            return {}
        default:
            return state
    }
}

export function register(state = initialState, action) {
    switch (action.type) {
        case customerConstants.REGISTER_REQUEST:
            return {
                loading: true,
                user: action.user
            }
        case customerConstants.REGISTER_SUCCESS:
            return {
                loading: false,
                user: action.user
            }
        case customerConstants.REGISTER_FAILURE:
            return {
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}