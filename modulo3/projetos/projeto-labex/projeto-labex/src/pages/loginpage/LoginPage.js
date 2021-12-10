import { useHistory } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { DivMain, DivHeader, DivInput } from './Styled'
import useForm from '../../hooks/useForm'

function LoginPage() {

    const history = useHistory()
    const {form, handleInputs, cleanFields} = useForm({email: "", password: ""})

    const goToHomePage = () => {
        history.push('/')
    }

    const onSubmitLogin = (e) => {
        e.preventDefault()

        const headers = {
            'Content-Type' : 'application/json',
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-marques-carver/login', form, headers)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            history.push('/AdminHome')
            cleanFields()
        })
        .catch((err) => {
            console.log('Deu errado', err.response.data)
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