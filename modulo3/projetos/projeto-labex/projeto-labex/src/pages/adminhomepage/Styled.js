import styled from "styled-components";

export const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`
export const DivHeader = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: 100%;
`

export const DivTripList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;


    ul{
        border: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: start;
        width: 200px;
        height: 70px;
        margin: 10px 0;
    }

    button{
        margin: 10px;
    }
`

export const DivFooter = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100%;
`