import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './Styled';
import { useNavigate } from 'react-router-dom'
import { goToLogin, goToFeed} from '../../router/coordinator'

const Header = ({rightButtonText, setRightButtonText}) => {
    
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
    }

    const rightButtonAction = () => {
        if(token){
            logout() 
            setRightButtonText('Login')
            goToLogin(navigate)
        } else {
            goToLogin(navigate)
        }
    }

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => goToFeed(navigate)} color="inherit">LabEddit</Button>
                <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
            </StyledToolbar>
        </AppBar>
  )
}

export default Header