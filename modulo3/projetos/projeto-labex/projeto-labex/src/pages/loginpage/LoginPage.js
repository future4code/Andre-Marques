import { useHistory } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { DivMain, DivHeader, DivInput } from './Styled'
import useForm from '../../hooks/useForm'
import { BASE_URL } from '../../constants/Constants'

function LoginPage() {

    const history = useHistory()
    const {form, handleInputs, cleanFields} = useForm({email: "", password: ""})

    const goToHomePage = () => {
        history.push('/')
    }

    const onSubmitLogin = (e) => {
        e.preventDefault()

        axios.post(`${BASE_URL}login`, form, {
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            history.push('/AdminHome')
            cleanFields()
        })
        .catch((err) => {
            alert(err.response.data)
        })
    }

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token !== null){
            history.push('/AdminHome')
        }
    }, [])

    

    return (
        <DivMain>
            
            <DivHeader>
                <button onClick={goToHomePage}>Voltar</button>
            </DivHeader>

            <DivInput>
                <form onSubmit={onSubmitLogin}>
                    <input required type="email" placeholder="Email" name="email" value={form.email} onChange={handleInputs}></input>
                    <input pattern={'^.{3,}$'} le={'Sua senha deve ter mo mínimo 3 caracteres'} required type="password" placeholder="Senha" name="password" value={form.password} onChange={handleInputs}></input>
                    <button>Entrar</button>
                </form>
            </DivInput>

        </DivMain>
    )
}

export default LoginPage