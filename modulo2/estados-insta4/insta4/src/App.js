import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
class App extends React.Component {

  state = {
    postagem: [
      {
        nomeUsuario: "Paula",
        fotoUsuario: "https://picsum.photos/id/1011/367/267",
        fotoPost: "https://picsum.photos/id/0/367/267"
      },

      {
        nomeUsuario: "Claúdia",
        fotoUsuario: "https://picsum.photos/id/1027/367/267",
        fotoPost: "https://picsum.photos/id/1000/367/267"
      },

      {
        nomeUsuario: "Fernanda",
        fotoUsuario: "https://picsum.photos/id/22/367/267",
        fotoPost: "https://picsum.photos/id/1015/367/267"
      }
    ],

    inputNome: "",
    inputFotoUsuario: "",
    inputFotoPost: ""
  }

  adicionarPost = () => {

    const novoPost = {
      nomeUsuario: this.state.inputNome,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    }

    const novoPosts = [...this.state.postagem, novoPost]

    this.setState({ postagem: novoPosts })
    this.setState({
      inputNome: "",
      inputFotoUsuario: "",
      inputFotoPost: ""
    })
  }

  onChangeNomeUsuario = (event) => {
    this.setState({ inputNome: event.target.value })
  }

  onChangeFotoUsuario = (event) => {
    this.setState({ inputFotoUsuario: event.target.value })
  }

  onChangeFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value })
  }

  render() {

    const listaPostComponentes = this.state.postagem.map((post) => {
      return (
        <Post>
          nomeUsuario = {post.nomeUsuario}
          fotoUsuario = {post.fotoUsuario}
          fotoPost = {post.fotoPost}
        </Post>
      )
    })

    return (
      <MainContainer>
        {
          this.state.postagem.map((post) => {
            return (
              <Post
                nomeUsuario={post.nomeUsuario}
                fotoUsuario={post.fotoUsuario}
                fotoPost={post.fotoPost}
              />
            )
          })
        }
        <input
          value={this.state.inputNome}
          onChange={this.onChangeNomeUsuario}
          placeholder="Nome"
        />
        <input
          value={this.state.inputFotoUsuario}
          onChange={this.onChangeFotoUsuario}
          placeholder="Foto do Usuário"
        />
        <input
          value={this.state.inputFotoPost}
          onChange={this.onChangeFotoPost}
          placeholder="Foto do Post"
        />
        <button onClick={this.adicionarPost}>Adicionar</button>
      </MainContainer>
    );
  }
}

export default App;
