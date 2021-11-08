import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


export default class PerguntaFechada extends React.Component{

    onChangeQuantidade = (event) => {
        return event.target.value;
    }

  render(){
    return(
      <Div>
          <h5>{this.props.pergunta}</h5>
         <select onChange={this.onChangeQuantidade}>
            {this.props.quantidade.map((qtd, i) => (
                <option key={i} value={qtd}>{qtd}</option>
            ))}
        </select>
      </Div>
    )
  }
}