import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


export default class Etapa4 extends React.Component{
  render(){
    return(
      <Div>
        <h1>Etapa 4 - O Formulário Acabou</h1>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </Div>
    )
  }
}