import styled from "styled-components";

export const DivMain = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
`
export const DivHeader = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    height: 100px;
    width: 100%;
`

export const DivFooter = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100%;
`

export const FormCreateTrip = styled.form`
    display: flex;
    flex-direction: column;
    margin: 30px;
    align-items: center;

    select {
        margin: 10px;
        width: 309px;
        height: 35px;
    }

    input{
        margin: 10px;
        width: 300px;
        height: 30px;
    }
`