import { DivContainer, StyledButton } from './Styled'
import LoginForm from "./LoginForm"
import { goToSignUp } from '../../router/coordinator'
import { useNavigate } from 'react-router-dom'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = ({setRightButtonText}) => {

    useUnprotectedPage()

    const navigate = useNavigate()

    return (
        <DivContainer>
            <h1>Logo</h1>
            <LoginForm setRightButtonText={setRightButtonText}/>
            <StyledButton
                    fullWidth
                    type="text"
                    variant="text"
                    onClick={() => goToSignUp(navigate)}
                    color="primary"
                >
                 Nao é cadastrado? Cadastre-se
                </StyledButton>
        </DivContainer>
    )
}

export default LoginPage