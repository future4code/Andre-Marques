import React from 'react';
import styled from 'styled-components';
import Etapa1 from './Components/Etapa1';
import Etapa2 from './Components/Etapa2';
import Etapa3 from './Components/Etapa3';
import Etapa4 from './Components/Etapa4';
import PerguntaAberta from './Components/Perguntas/PerguntaAberta';
import PerguntaFechada from './Components/Perguntas/PerguntaFechada';

const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 15px;
`

export default class App extends React.Component{

  state = {
    etapa: 1
  }

renderizandoEtapa = () => {

    switch(this.state.etapa){

      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3/>;
      case 4:
        return <Etapa4 />;
      default:
        return <Etapa1 />
    }
 }

irParaProximaEtapa = () => {
  this.setState({etapa: this.state.etapa + 1})
 }

  render(){
    return(
      <DivMain>
        <Div>
          {this.renderizandoEtapa()}
        </Div>
        <Div>
          {this.state.etapa !== 4 && this.state.etapa === 1 && (<button onClick={this.irParaProximaEtapa}>Continuar</button>)}
          {this.state.etapa !== 4 && (this.state.etapa === 2 || this.state.etapa === 3) && (<button onClick={this.irParaProximaEtapa}>Finalizar</button>)}
        </Div>
      </DivMain>
    )
  }
}
