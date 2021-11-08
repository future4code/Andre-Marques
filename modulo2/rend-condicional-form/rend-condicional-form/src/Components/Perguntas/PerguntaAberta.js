import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default class PerguntaAberta extends React.Component{

    state = {
        valorTexto: "",
    }

    onChangeText = (event) => {
        this.setState({valorTexto: event.target.value})
    }
    
  render(){
    return(
        <Div>
            <h5>{this.props.pergunta}</h5>
            <input onChange={this.onChangeText} value={this.state.valorTexto} type="text" />
        </Div>
    )
  }
}