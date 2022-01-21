import { DivInput, Form} from './Styled'
import useForm from "../../hooks/useForm"
import {StyledTextField, StyledButton} from '../LoginPage/Styled'
import { useNavigate } from "react-router-dom"
import { signUp } from '../../services/users'

const SignUpForm = ({setRightButtonText}) => {

    const navigate = useNavigate()

    const [form, handleInputChange, clear] = useForm({username: "", email: "", password: ""})

    const OnSubmitForm = (e) => {
        e.preventDefault()
        signUp(form, clear, navigate, setRightButtonText)
    }

    return (
        <DivInput>
            <Form onSubmit={OnSubmitForm}>
                <StyledTextField
                    name="username"
                    value={form.username}
                    onChange={handleInputChange}
                    required
                    placeholder="Nome"
                    variant="outlined"
                    autoFocus
                    fullWidth
                >
                </StyledTextField>
                
                <StyledTextField
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    required
                    placeholder="E-mail"
                    variant="outlined"
                    fullWidth
                >
                </StyledTextField>

                <StyledTextField
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                    required
                    placeholder="Senha"
                    variant="outlined"
                    fullWidth
                    type="password"
                    min={8}
                    max={30}
                >
                </StyledTextField>
                
                <StyledButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Cadastrar
                </StyledButton>
                </Form>
        </DivInput>
    )
}

export default SignUpForm