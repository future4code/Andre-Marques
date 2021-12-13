import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './Styled';
import { useNavigate } from 'react-router-dom'
import { goToLogin, goToFeed} from '../../router/coordinator'


export default function ButtonAppBar() {
    
    const navigate = useNavigate()

    return (
        <AppBar position="static">
            <StyledToolbar>
            <Button onClick={() => goToFeed(navigate)} color="inherit">LabEddit</Button>
            <Button onClick={() => goToLogin(navigate)} color="inherit">Login</Button>
            </StyledToolbar>
        </AppBar>
  )
}