import React from 'react';
import styled from 'styled-components';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardIdiomas from './components/CardIdiomas/CardIdiomas'
import { createGlobalStyle } from 'styled-components';
import Eu from './img/eu.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  /* Outros estilos globais */
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const DivSection = styled.div`
  width: 40vw;
  margin: 10px 0;
`

const H2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`


function App() {
  return (
    <BodyContainer>
      <GlobalStyle/>
      <DivSection>
        <H2>Dados pessoais</H2>
        <CardGrande 
          imagem={Eu}
          nome="André Vinicius Marques" 
          descricao="Olá, eu sou o André, e atualmente estou frequentando o bootcamp Web FullStack da Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </DivSection>

      <DivSection>
        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/542/premium/542689.png?token=exp=1635957964~hmac=5833f3f10aaffd7cb6a2b76fb227ccd3" 
          nome="Email" 
          descricao="andreviniciusmarques@gmail.com" 
        />
        
        <CardPequeno 
          imagem="https://cdn-icons-png.flaticon.com/512/484/484167.png" 
          nome="Endereço" 
          descricao="Rua Áustria, 2021" 
        />
      </DivSection>

      <DivSection>
        <H2>Experiências profissionais</H2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </DivSection>

      <DivSection>
        <H2>Idiomas</H2>
        <CardIdiomas  
          idioma1="Português" 
          idioma2="Inglês"
          idioma3="Alemão"
        />
      </DivSection>

      <DivSection>
        <H2>Minhas redes sociais</H2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </DivSection>
    </BodyContainer>
  );
}

export default App;
