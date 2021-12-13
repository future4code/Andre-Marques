import react from "react"
import { DivContainer } from './Styled'
import LoginForm from "./LoginForm"
import { Navigate, useNavigate } from "react-router-dom"
import { goToSignUp } from "../../router/coordinator"
import Button from '@material-ui/core/Button'

const LoginPage = () => {

    const navigate = useNavigate()

    return (
        <DivContainer>
            <h1>Logo</h1>
            <LoginForm />

        <Button
            type="submit"
            variant="text"
            onClick={() => goToSignUp(navigate)}
            color="primary"
        >
            Nao é cadastrado? Cadastre-se
        </Button>

        </DivContainer>
    )
}

export default LoginPage