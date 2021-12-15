import useProtectedPage from "../../hooks/useProtectedPage"
import { DivContainer } from "./Styled"
import { Typography } from "@material-ui/core"

const ErrorPage = () => {

    useProtectedPage()

    return (
        <DivContainer>
            <Typography color="primary" variant="h4" align="center">ErrorPage</Typography>
        </DivContainer>
    )
}

export default ErrorPage