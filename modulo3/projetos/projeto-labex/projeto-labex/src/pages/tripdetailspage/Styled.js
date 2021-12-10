import styled from "styled-components";

export const DivMain = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;  
`
export const DivHeader = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: 100%;
`

export const DivViagem = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`

export const DivTripList = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 400px;
` 

export const DivPeopleList = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 400px;
` 

export const DivButton = styled.div`
border: 1px solid black;
    display: flex;
    flex-direction: row;
    align-self: center;
   
    button{
        margin: 10px;
    }
`