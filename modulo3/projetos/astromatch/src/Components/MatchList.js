import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

const DivSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    width: 300px;
    height: 700px;
    margin-bottom: 10px;
    margin-top: 10px;
    overflow-y: auto;

    ::-webkit-scrollbar{
        display: none;
    }
`
const DivCard = styled.div`
    background: linear-gradient(to left, #C94277, #101935, #F1E4F3);
    width: 200px;
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin-bottom: 10px;
    padding: 5px;
    color: white;

    img{
        width: 45px;
        height: 45px;
        border-radius: 50px;
        margin-right: 5px;
    }
`

function MatchList (props){

    const [listMatches, setListMaches] = useState()

    useEffect(() => {
        getMatches() 
    }, [])

    useEffect(() => {
        if(props.discardMatches){
            setListMaches("")
        }  
        getMatches()  
    
    }, [props.discardMatches])

    const URL = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/andremarques/'

    const getMatches = () => {
        axios.get(URL + 'matches')
        .then((res) => {
            setListMaches(res.data.matches)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

console.log(listMatches)
    return(
        <DivSection>
            {listMatches ? listMatches.map((match) => {
            return (
                <DivCard>
                    <img alt="Person" src={match.photo}></img>
                    <p>{match.name}</p>
                </DivCard>
            )
        }) : ""}
        </DivSection>
    )
}

export default MatchList;