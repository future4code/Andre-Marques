import styled from "styled-components";

export const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 1550px;
    height: 100vh;
`
export const DivHeader = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    height: 100px;
    width: 100%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    height: 100%;
    align-items: center;
    justify-content: center;

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

    button{
        margin-top: 10px;
    }
`