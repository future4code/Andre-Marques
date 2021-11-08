import React from "react";
import styled from "styled-components";

const DivContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 150px;
    justify-content: start;
`

const DivDaDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const Ul = styled.ul` 
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
`

const Li = styled.li`
    margin: 10px;
`

function CardIdiomas(props){

    return(
        <DivContainer>
            <DivDaDiv>
                <Ul>
                    <Li>{props.idioma1}</Li>
                    <Li>{props.idioma2}</Li>
                    <Li>{props.idioma3}</Li>
                </Ul>
            </DivDaDiv>
        </DivContainer>
    )
}

export default CardIdiomas;