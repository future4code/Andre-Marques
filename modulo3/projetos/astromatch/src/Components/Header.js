import styled from "styled-components";
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';

const IconStyled = styled(PeopleIcon)`
    &&{
        cursor:pointer;
        color: white;
        border-radius: 50px;
        width: 50px;
        height: 50px;
        /* background:linear-gradient(#F39FC8, #F23590, #D77EA9); */
        background: linear-gradient(to top, #C94277, #101935, #F1E4F3);
    }
`
const AccountStyled = styled(PersonIcon)`
    &&{
        cursor:pointer;
        color: white;
        border-radius: 50px;
        width: 50px;
        height: 50px;
        /* background:linear-gradient(#F39FC8, #F23590, #D77EA9); */
        background: linear-gradient(to top, #C94277, #101935, #F1E4F3);
    }
`

const DivHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    margin-top: 10px;
    padding: 0 20px;
    height: 100px;

    p{
        background: linear-gradient(to top, #C94277, #101935, #F1E4F3);
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 50px;
        border-radius: 25px;
    }
`

function Header (props){

    const currentPage = () => {
        switch(props.page){
            case 'home':
                return(
                    <DivHeader>
                        <p>AstroMatch</p>
                        <IconStyled variant="contained" color="primary" onClick={props.settingPageMatches}/>
                    </DivHeader>
                )
            case 'matches':
                return(
                    <DivHeader>
                        <p>AstroMatch</p>
                        <AccountStyled variant="contained" color="primary" onClick={props.settingPageHome}/>
                    </DivHeader>
                )
            default:
                return(
                    <DivHeader>
                        <p>AstroMatch</p>
                        <IconStyled variant="contained" color="primary" onClick={props.settingPageMatches}/>
                    </DivHeader>
                )
        }
    }
    return(
        currentPage()
    )
}

export default Header;