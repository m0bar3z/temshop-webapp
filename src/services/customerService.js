import axios from 'axios'
import { SERVER_URL } from '../config'

export const customerService = {
    register,
    login
}

function register(body) {
    return axios.post(`${SERVER_URL}/customer/v1`, body)
        .then(res => {
            console.log(`res.customer >> `)
            console.log(res.data.data)
            localStorage.setItem('user', JSON.stringify(res.data.data))
            return res.data
        })
        .catch(error => {
            if(error.response) {
                console.log('error in customer service')
                console.log(error.response.data)
                console.log(error.response.status)
            }
            return error
        })
}

function login(body) {
    return axios.post(`${SERVER_URL}/customer/v1/login`, body)
        .then(res => {
            console.log('res.data.data >>')
            console.log(res.data.data)
            localStorage.setItem('user', JSON.stringify(res.data.data))
            return res.data
        })
        .catch(error => { 
            if(error.response) {
                console.log('error in customer service')
                console.log(error.response.data)
                console.log(error.response.status)
            }

            return error
        })
}