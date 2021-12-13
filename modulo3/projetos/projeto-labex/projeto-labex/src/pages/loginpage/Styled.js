import styled from "styled-components";

export const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
`
export const DivHeader = styled.div`
    box-shadow: 5px 5px 5px black;
    border-radius: 25px 5px;
    display: flex;
    align-items: center;
    height: 100px;
    width: 300px;
    justify-content: center;
    background-image: linear-gradient(to bottom, red, yellow);

    button{
        margin: 0 10px;
    }
`

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-top: 15px;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;

        input{
        margin: 10px;
        width: 400px;
        height: 30px;
    }

    button{
        margin: 15px 0;
        width: 50px;
    }
    }
`