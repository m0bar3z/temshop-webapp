import axios from 'axios'
import { SERVER_URL } from '../config'

export const sellerService = {
    login,
    logout
}

function login(body) {
    return axios.post(`${SERVER_URL}/seller/v1/login`, body)
        .then(res => {
            console.log(`res.data.data >> ${JSON.stringify(res.data.data)}`)
            localStorage.setItem('user', JSON.stringify(res.data.data))
            return res.data
        })
        .catch(error => {
            if(error.response) {
                console.log('error in seller service')
                console.log(error.response.data)
                console.log(error.response.status)
            }
            return error
        })
}

function logout() {
    localStorage.removeItem('user')
}