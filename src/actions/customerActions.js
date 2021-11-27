import { customerConstants } from '../constants/customerConstants'
import { customerService } from '../services'
import { alertActions } from '.'
import { Navigate } from 'react-router-dom'

export const customerActions = {
    register,
    login,
    logout
}

function register(body) {
    return dispatch => {
        dispatch(request(body))

        customerService.register(body)
            .then(customer => {
                console.log('customer into customerAction >>')
                console.log(customer)

                if(customer === undefined) {
                    dispatch(alertActions.error('ارتباط با سرور برفرار نیست!'))
                    dispatch(failure('ارتباط با سرور برقرار نیست. ثبت نام ناموفق!'))
                }
                else if(customer.success) {
                    console.log('customer registered')
                    dispatch(success(customer))
                    dispatch(alertActions.success(customer.message))

                    setTimeout(() => {
                        console.log('history.push')
                    }, 1500);

                } else if(!customer.success) {
                    dispatch(alertActions.error(customer.message))
                    dispatch(failure(customer.message))
                } else {
                    dispatch(alertActions.error('مشکلی وجود دارد'))
                    dispatch(failure('مشکلی وجود دارد!'))
                }
                setTimeout(() => {
                    dispatch(alertActions.clear())
                }, 1500);
            })
            .catch(error => {
                dispatch(failure(error.toString()))
                console.log('error occured!')
                console.log(error.toString())
                // dispatch alert
            })

    }

    function request(user) { console.log('into request'); return { type: customerConstants.REGISTER_REQUEST, user }}
    function success(user) { console.log('into success'); return { type: customerConstants.REGISTER_SUCCESS, user } } 
    function failure(error) { console.log('into failure'); return { type: customerConstants.REGISTER_FAILURE, error } }
}

function login(body) {
    return dispatch => {
        dispatch(request(body))
        
        customerService.login(body)
            .then(response => {
                console.log('response to customer action >>')
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

    function request(user) { console.log('into request'); return { type: customerConstants.LOGIN_REQUEST, user }}
    function success(user) { console.log('into success'); return { type: customerConstants.LOGIN_SUCCESS, user }}
    function failure(error) { console.log('into error'); return { type: customerConstants.LOGIN_FAILURE, error }}
}

function logout() {
    console.log('into logout')
    customerService.logout()
    return {
        type: customerConstants.LOGOUT 
    }
}