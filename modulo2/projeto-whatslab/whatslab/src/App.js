import React from 'react';
import styled from 'styled-components'



const DivBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid black;
`

const DivMain = styled.div`
  background-color: #8DC4C6;
  min-height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: end;
`

const DivPost = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;
  margin: 20px;
`

const NomeP = styled.p`
  /* border: 1px solid black; */
  padding: 0 10px;
`

const TextoP = styled.p`
  /* border: 1px solid black; */
`
const DivInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
`

const PequenoInput = styled.input`
    width:200px;
`
const GrandeInput = styled.input`
    width: 400px;
`


export default class App extends React.Component {

  state = {
    posts: [],
    novoId: "",
    novoNome: "",
    novoTexto: ""
  }

  onChangeNome = (event) => {
    this.setState({ novoNome: event.target.value })
  }

  onChangeTexto = (event) => {
    this.setState({ novoTexto: event.target.value })
  }

  addPost = () => {
    const novoPost = {
      id: Date.now(),
      nome: this.state.novoNome,
      texto: this.state.novoTexto
    }

    const copiaPosts = [...this.state.posts]
    copiaPosts.push(novoPost)

    this.setState({ posts: copiaPosts })
    this.setState({novoNome: "", novoTexto: "" })
  }

  deletarPost = (idPost) =>{
    this.state.posts.map((post) =>{
      return idPost !== post.id
    })
  }

  render() {

    const listaComponentes = this.state.posts.map((post) => {
      return (
        <DivPost>
          <NomeP key={post.id}><b>{post.nome + ': '}</b></NomeP>
          <TextoP onDoubleClick={this.deletarPost}>{post.texto}</TextoP>
        </DivPost>
      )
    })

    return (
      <DivBody>
        <DivMain>
          {listaComponentes}
        </DivMain>
        <DivInput>
        <PequenoInput placeholder="Nome" type="text" onChange={this.onChangeNome} value={this.state.novoNome} />
        <GrandeInput placeholder="Mensagem" type="text" onChange={this.onChangeTexto} value={this.state.novoTexto} />
        <button type="submit" onClick={this.addPost}>Enviar</button>
        </DivInput>
      </DivBody>
    )
  }
}

