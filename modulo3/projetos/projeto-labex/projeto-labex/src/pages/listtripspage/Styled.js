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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 350px;
    background-image: linear-gradient(to bottom, red, yellow);

button{
    margin: 0 10px;
}
`
export const DivTripContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin-top: 30px;
    width: 900px;
    overflow-y: auto;

::-webkit-scrollbar{
    display: none;
}

`

export const DivTripList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 800px;
    height: 200px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px black;
    background-image: linear-gradient(to top, red, yellow);
    margin: 15px;

    p{
        margin: 5px 15px;
    }
`

