import styled from "styled-components";

export const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; 
    height: 100vh;
    width: 100vw;
`
export const DivHeader = styled.div`
    box-shadow: 5px 5px 5px black;
    border-radius: 25px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 350px;
    background-image: linear-gradient(to bottom, red, yellow);

    button{
        margin: 0 10px;
    }
`

export const DivViagem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    margin-top: 15px;
    overflow-y: auto;

    ::-webkit-scrollbar{
        display: none;
    }
`

export const DivTripList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 400px;
    height: 250px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px black;
    background-image: linear-gradient(to top, red, yellow);
    margin: 15px;

    p{
        margin: 5px 10px;
    }
` 

export const DivPeopleList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    border-radius: 20px;
    box-shadow: 5px 5px 5px black;
    background-image: linear-gradient(to top, red, yellow);
    margin-bottom: 10px;

    p{
        margin: 5px 10px;
    }
` 

export const DivButton = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
   
    button{
        margin: 10px;
    }
`

export const DivH3 = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const DivApproved = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 400px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px black;
    background-image: linear-gradient(to top, red, yellow);
    margin: 15px;

    h2{
        align-self: center;
    }

    ul{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 90px;
        height: 35px;
        border-radius: 20px;
        box-shadow: 5px 5px 5px black;
        background-image: linear-gradient(to top, red, yellow);
        margin-bottom: 10px;
    }
`
export const DivChoice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 400px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px black;
    background-image: linear-gradient(to top, red, yellow);
    margin: 15px;


    h2{
        align-self: center;
    }
`