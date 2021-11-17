import { combineReducers } from "redux";
import { register, authentication } from "./authenticatonReducer";
import { alert } from "./alertReducer";

export default combineReducers({
    register,
    authentication,
    alert
}) 