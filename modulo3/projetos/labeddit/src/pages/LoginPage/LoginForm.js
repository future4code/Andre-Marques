import react from "react"
import { DivInput, Form} from './Styled'
import useForm from "../../hooks/useForm"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const LoginForm = () => {

    const [form, handleInputChange, clear] = useForm({name: "", email: ""})

    const OnSubmitForm = (e) => {
        e.preventDefault()
    }

    return (
        <DivInput>
            <Form onSubmit={OnSubmitForm}>
                <TextField
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    required
                    placeholder="email"
                    variant="outlined"
                    fullWidth
                >
                </TextField>
                
                <TextField
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    required
                    placeholder="password"
                    variant="outlined"
                    fullWidth
                >
                </TextField>
                
                <Button
                    type="text"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Login
                </Button>

                </Form>
        </DivInput>
    )
}

export default LoginForm