import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios'
import Button from '@material-ui/core/Button'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const ButtonStyled = styled(Button)`
    &&{
        border-radius: 50px;
        /* background:linear-gradient(#F39FC8, #F23590, #D77EA9); */
        background: linear-gradient(to bottom, #C94277, #101935, #F1E4F3);
        width: 100px;
        height: 50px;
    }
`

const DivSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    padding: 0 20px;
    height: 700px;
    padding-top: 10px;
    padding-bottom: 10px;
`
const DivCard = styled.div`
    box-shadow: 2px 2px 50px black;
    display: flex;
    width: 350px;
    height: 450px;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to bottom, #C94277, #101935);
    color: white;

    img{
        max-width: 100%;
        width: 350px;
        height: 300px;
        object-fit: cover;
        object-position: top;
    }

    p{
        padding: 0px 20px;
        padding-bottom: 10px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
`

const DivFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 300px;
    height: 50px;
    margin-bottom: 10px;
`

function CardMatchs (props){

    const [profile, setProfile] = useState()

    useEffect(() => {
        getProfileToChoose()
    }, [])

    useEffect(() => {
        if(props.discardMatches){
            setProfile("")
            getProfileToChoose()
        }  
    }, [props.discardMatches])

    const URL = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/andremarques/'

    const getProfileToChoose = () => {
        axios.get(URL + 'person')
        .then((res) => {
            setProfile({
                name: res.data.profile.name,
                photo: res.data.profile.photo,
                age: res.data.profile.age,
                bio: res.data.profile.bio,
                id: res.data.profile.id   
            })
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    const choosePersonTrue = () => {

        const body = {
            id: profile.id,
            choice: true
        }
        axios.post(URL + 'choose-person', body)
        .then((res) => {
            getProfileToChoose()            
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    const choosePersonFalse = () => {

        const body = {
            id: profile.id,
            choice: false
        }
        axios.post(URL + 'choose-person', body)
        .then((res) => {
            getProfileToChoose()    
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    return(
        <DivSection>
            {profile ? (<DivCard>
             <img alt="Person" src={profile.photo}></img>
             <h4>{profile.name}, {profile.age}</h4>
             <p>{profile.bio}</p>
         </DivCard>) : ""}
            <DivFooter>
                        <ButtonStyled variant="contained" color="primary" onClick={() => choosePersonFalse()}>{<ThumbDownIcon />}</ButtonStyled>
                        <ButtonStyled variant="contained" color="primary" onClick={() => choosePersonTrue()}>{<ThumbUpIcon />}</ButtonStyled>
            </DivFooter>
        </DivSection>
        
    )
}

export default CardMatchs;