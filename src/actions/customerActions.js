import { customerConstants } from '../constants/customerConstants'
import { customerService } from '../services'
import { alertActions } from '.'

export const customerActions = {
    register
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