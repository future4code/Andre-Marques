import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import SignUpForm from "./SignupForm"
import { DivContainer } from "./Styled"

const SignUpPage = ({setRightButtonText}) => {

    useUnprotectedPage()

    return (
        <DivContainer>
            <h1>Logo</h1>
            <SignUpForm setRightButtonText={setRightButtonText}/>
        </DivContainer>
    )
}

export default SignUpPage