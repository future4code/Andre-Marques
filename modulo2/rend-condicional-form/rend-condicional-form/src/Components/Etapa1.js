import React from 'react'
import styled from 'styled-components'
import PerguntaAberta from './Perguntas/PerguntaAberta'
import PerguntaFechada from './Perguntas/PerguntaFechada'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default class Etapa1 extends React.Component{
  render(){
    return(
      <Div>
        <h1>Etapa 1 - Dados Gerais</h1>
        <PerguntaAberta pergunta ={"1. Qual o seu nome?"}></PerguntaAberta>
        <PerguntaAberta pergunta ={"2. Qual o dua idade?"}></PerguntaAberta>
        <PerguntaAberta pergunta ={"3. Qual o seu email?"}></PerguntaAberta>
        <PerguntaFechada 
            pergunta={"4. Qual a sua escolaridade?"}
            quantidade={[
                "Ensino médio incompleto",
                "Ensino médio completo",
                "Ensino superior incompleto",
                "Ensino superior completo"
            ]}
        />             
      </Div>
    )
  }
}