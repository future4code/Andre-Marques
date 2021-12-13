import styled from "styled-components";

export const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    width: 100%;
`
export const DivHeader = styled.div`
    box-shadow: 5px 5px 5px black;
    border-radius: 25px 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: 350px;
    background-image: linear-gradient(to bottom, red, yellow);

    button{
        margin: 0 10px;
    }
`

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-top: 30px;
    width: 400px;
    overflow-y: auto;

    ::-webkit-scrollbar{
        display: none;
    }
`
export const DivButton =  styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    width: 100%;

    button{
        display: flex;
        align-items: center;
        width: 60px;
        display: flex;
        justify-content: space-evenly;
        margin: 5px;
    }
`

export const DivP = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    margin: 10px;
`

export const DivTripList = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 100px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px black;
    background-image: linear-gradient(to top, red, yellow);
    margin: 15px;
`