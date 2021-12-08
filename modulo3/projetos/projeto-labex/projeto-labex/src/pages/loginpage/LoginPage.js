import styled from 'styled-components'
import { useHistory } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'

const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 1550px;
    height: 100vh;
`
const DivHeader = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    height: 100px;
    width: 100%;
`

const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    input{
        margin-top: 15px;
    }
`

function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const goToHomePage = () => {
        history.goBack()
    }

    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-marques-carver/login', body)
        .then((res) => {
            console.log('Deu certo', res.data)
            localStorage.setItem('token', res.data.token)
            history.push('/AdminHome')
        })
        .catch((err) => {
            console.log('Deu errado', err.response.data)
        })
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <DivMain>
            
            <DivHeader>
                <button onClick={goToHomePage}>Voltar</button>
            </DivHeader>

            <DivInput>
                <input placeholder="Email" value={email} onChange={handleEmail}></input>
                <input placeholder="Senha" value={password} onChange={handlePassword}></input>
                <button onClick={onSubmitLogin}>Entrar</button>
            </DivInput>

        </DivMain>
    )
}

export default LoginPage