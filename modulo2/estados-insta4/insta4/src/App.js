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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/id/1011/367/267'}
          fotoPost={'https://picsum.photos/id/0/367/267'}
        />

        <Post
          nomeUsuario={'claudinha'}
          fotoUsuario={'https://picsum.photos/id/1027/367/267'}
          fotoPost={'https://picsum.photos/id/1000/367/267'}
        />

        <Post
          nomeUsuario={'fernandinho'}
          fotoUsuario={'https://picsum.photos/id/22/367/267'}
          fotoPost={'https://picsum.photos/id/1015/367/267'}
        />
      </MainContainer>
    );
  }
}

export default App;
