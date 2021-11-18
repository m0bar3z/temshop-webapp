import { alertConstants } from "../constants";

const initialState = {}

export function alert(state = initialState, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'success',
                message: action.message
            }
        case alertConstants.ERROR:
            return {
                type: 'danger',
                message: action.message
            }
        case alertConstants.CLEAR:
            return {}
    
        default:
            return state
    }
}