import { BASE_URL } from "../constants/urls"
import axios from "axios"
import { goToFeed } from "../router/coordinator"

export const login = (body, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/login`, body, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        clear()
        goToFeed(navigate)
        setRightButtonText('Logout')
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}

export const signUp = (body, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/signup`, body, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        clear()
        goToFeed(navigate)
        setRightButtonText('Logout')
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}