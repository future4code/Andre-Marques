import React from 'react';
import PerguntaAberta from './Perguntas/PerguntaAberta'
import PerguntaFechada from './Perguntas/PerguntaFechada';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


export default class Etapa3 extends React.Component{
  render(){
    return(
      <Div>
        <h1>Etapa 3 - Informações Gerais de Ensino</h1>
        <PerguntaAberta pergunta ={"7. Porque você não terminou o curso de graduação?"}></PerguntaAberta>
        <PerguntaFechada 
            pergunta={"8. Você fez algum curso complementar"} 
            quantidade={[
                "Curso técnico",
                "Curso de inglês"
            ]}
        />
      </Div>
    )
  }
}