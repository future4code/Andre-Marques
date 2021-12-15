import styled from "styled-components"

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivNewPost = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 30vw;
    margin-top: 30px;

    input{
        margin: 10px;
        width: 200px;
        height:80px;
    }

    button{
        margin-top: 10px;
        margin-bottom: 30px;
    }
`
export const DivPosts = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 30vw;
    margin-top: 30px;

    h3{
        margin-top: 0;
        border: 1px solid black;
        width: 100%;
        text-align: center;
    }

    p{
        width: 100%;
        min-height: 30px;
        text-align: center;
    }
`

export const DivFooterPost = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
    width: 100%;
`

export const DivButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    button{
        height: 25px;
        border-radius: 30px;
    }
`