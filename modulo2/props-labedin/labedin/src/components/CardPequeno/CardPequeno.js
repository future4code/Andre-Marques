import React from 'react';
import styled from 'styled-components';

const DivContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 150px;
`

const Imagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const H4 = styled.h4`
    margin-bottom: 15px;
`

const DivDaDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardPequeno(props) {
    return (
        <DivContainer>
            <Imagem src={ props.imagem } />
            <DivDaDiv>
                <H4>{ props.nome }</H4>
                <p>{ props.descricao }</p>
            </DivDaDiv>
        </DivContainer>
    )
}

export default CardPequeno;