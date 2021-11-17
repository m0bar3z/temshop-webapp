import { combineReducers } from "redux";
import { register, authentication } from "./authenticatonReducer";

export default combineReducers({
    register,
    authentication
}) 