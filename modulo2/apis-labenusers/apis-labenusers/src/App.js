import React from 'react';
import styled from 'styled-components';
import CadastroUsuario from './Components/CadastroUsuario';
import ListaUsuario from './Components/ListaUsuario';
import axios from 'axios';

const DivMain = styled.div`
  display: flex;
  flex-direction: column;

  button{
    width: 200px;
    margin: 20px;
  }
`
const DivListaUsuario = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px;

    button{
      width: 15px;
      border: none;
      background-color: white;
    }
`

export default class App extends React.Component{

  state = {
    pagina: true,
    inputNome: "",
    inputEmail: "",
    idUsuario: "",
    usuarios:[]
  }

  componentDidMount = () => {
    this.pegarListaUsuario()
  }

  onChangeInputNome = (e) => {
    this.setState({inputNome: e.target.value})
  }

  onChangeInputEmail = (e) => {
    this.setState({inputEmail: e.target.value})
  }

  pegarId = (id) => {

  }

  mudarPagina = () => {
    
    if(this.state.pagina === true){
      this.setState({pagina: false})
    }else{
      this.setState({pagina: true})
    }
  }

  pegarListaUsuario = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers: {
        Authorization: "andre-marques-carver"
      }
    }).then((resposta) => {
      console.log(resposta.data)
      this.setState({usuarios: resposta.data})
    }).catch((err) => {
      alert(err.response)
    })
  }

  criarListaUsuario = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers:{
        Authorization: "andre-marques-carver"
      }
    }).then((resposta) => {
      console.log(resposta.data)
      this.setState({usuarios: ''})
      this.criarListaUsuario()
      alert("Cadastrado com sucesso")
    }).catch((err) => {
      alert(err.response)
    })
  }

  deletarUsuario = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/ ${id}`,{
      headers: {
        Authorization: "andre-marques-carver"
      }
    }).then((res) => {
      this.setState({usuarios: this.state.usuarios.filter((usuario) => {
        if(usuario.id !== id){
          return usuario
        }
      })})
    }).catch((err) => {
      console.log(err.response)
    })
  }
 
  render() {

    const cadastro = <CadastroUsuario 
    nameInputValue={this.state.inputNome}
    onChangeNameInput={this.onChangeInputNome}
    emailInputValue={this.state.inputEmail}
    onChangeEmailInput={this.onChangeInputEmail}
    cadastrar={this.criarListaUsuario}/>

    const lista = <ListaUsuario 
    usuario = {this.state.usuarios.map((usuario) => {
      // console.log(usuario.id)
      return (
        <DivListaUsuario>
          <p>{usuario.name}</p>
          <button onClick={() => this.deletarUsuario(this.id)}>X</button>
        </DivListaUsuario>)
    })}
    />

    return (
      <DivMain>
        <button onClick={this.mudarPagina}>{this.state.pagina === true ? "Ir para página de lista" : "Ir para página de cadastro"}</button>
        {this.state.pagina === true ? cadastro : lista} 
      </DivMain>
    )
  }
}
