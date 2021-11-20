import { customerConstants, sellerConstants } from "../constants";

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user
    ? {
        loggedIn: true,
        loading: false,
        user
    } 
    : {
        loggedIn: false,
        loading: false,
    }

export function authentication(state = initialState, action) {
    switch (action.type) {
        case customerConstants.LOGIN_REQUEST:
        case sellerConstants.LOGIN_REQUEST:
            return {
                loggedIn: false,
                loading: true,
                user: action.user
            }
        case customerConstants.LOGIN_SUCCESS:
        case sellerConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                loading: false,
                user: action.user
            }
        case customerConstants.LOGIN_FAILURE:
        case sellerConstants.LOGIN_FAILURE: 
            return {
                loggedIn: false,
                loading: false,
            }
        case customerConstants.LOGOUT:
        case sellerConstants.LOGOUT: 
            return {}
        default:
            return state
    }
}

export function register(state = {}, action) {
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