import { DivInput, Form} from './Styled'
import useForm from "../../hooks/useForm"
import {StyledTextField, StyledButton} from '../LoginPage/Styled'
import { useNavigate } from "react-router-dom"
import { login } from '../../services/users'

const LoginForm = ({setRightButtonText}) => {

    const navigate = useNavigate()

    const [form, handleInputChange, clear] = useForm({email: "", password: ""})

    const OnSubmitForm = (e) => {
        e.preventDefault()
        login(form, clear, navigate, setRightButtonText)
    }

    return (
        <DivInput>
            <Form onSubmit={OnSubmitForm}>
                <StyledTextField
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    required
                    autoFocus
                    placeholder="email"
                    variant="outlined"
                    fullWidth
                >
                </StyledTextField>
                
                <StyledTextField
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                    type="password"
                    required
                    placeholder="password"
                    variant="outlined"
                    fullWidth
                >
                </StyledTextField>
                
                <StyledButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Login
                </StyledButton>

                </Form>
        </DivInput>
    )
}

export default LoginForm