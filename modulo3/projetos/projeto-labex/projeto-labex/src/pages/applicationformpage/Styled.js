import styled from "styled-components";

export const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
`
export const DivHeader = styled.div`
    box-shadow: 5px 5px 5px black;
    border-radius: 25px 5px;
    display: flex;
    align-items: center;
    height: 100px;
    width: 350px;
    justify-content: space-evenly;
    background-image: linear-gradient(to bottom, red, yellow);

    button{
        margin: 0 10px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    height: 700px;
}

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