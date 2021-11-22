import React from 'react'
import PerguntaAberta from './Perguntas/PerguntaAberta'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


export default class Etapa2 extends React.Component{
  render(){
    return(
      <Div>
        <h1>Etapa 2 - Informações do Ensino Superior</h1>
        <PerguntaAberta pergunta ={"5. Qual o curso?"}></PerguntaAberta>
        <PerguntaAberta pergunta ={"6. Qual a unidade de ensino?"}></PerguntaAberta>
      </Div>
    )
  }
}