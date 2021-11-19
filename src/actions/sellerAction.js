import { alertActions } from ".";
import { sellerService } from "../services";
import { sellerConstants } from "../constants";

export const sellerActions = {
    login
}

function login(body) {

    return dispatch => {
        dispatch(request(body))
        
        sellerService.login(body)
            .then(response => {
                console.log('response from customer action >>')
                console.log(response)

                if(response === undefined) {
                    dispatch(alertActions.error('ارتباط با سرور برقرار نیست'))
                    dispatch(failure('ارتباط با سرور برقرار نیست'))
                } else if(response.success) {
                    dispatch(alertActions.success(response.message))
                    dispatch(success(response.data))
                } else if(!response.success) {
                    dispatch(alertActions.error(response.message))
                    dispatch(failure(response.message))
                } else {
                    dispatch(alertActions.error('مشکلی وجود دارد'))
                    dispatch(failure('مشکلی وجود دارد'))
                }

                setTimeout(() => {
                    dispatch(alertActions.clear())
                }, 1500);
            })
            .catch(error => {
                dispatch(failure(error.toString()))
                console.log('error occured >>')
                console.log(error.toString())
                dispatch(alertActions.error(error.toString()))
            })
    }

    function request(user) { console.log('into request'); return { type: sellerConstants.LOGIN_REQUEST, user }}
    function success(user) { console.log('into success'); return { type: sellerConstants.LOGIN_SUCCESS, user }}
    function failure(error) { console.log('into failure'); return { type: sellerConstants.LOGIN_FAILURE, error } }
}