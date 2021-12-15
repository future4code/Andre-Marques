import styled from "styled-components"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export const StyledTextField = styled(TextField)`
    margin-top: 15px;
`
export const StyledButton = styled(Button)`
    margin-top: 15px;
    max-width: 500px;
`

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 90vh;
`
export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 500px;
    align-items: center;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 500px;
    align-items: center;
`