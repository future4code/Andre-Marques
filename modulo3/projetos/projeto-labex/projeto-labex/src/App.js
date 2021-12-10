import React from "react";
import Router from "./router/Router";
import { createGlobalStyle } from 'styled-components';
 
// Estilos definidos aqui serão aplicados a toda a aplicação
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(to bottom, red, yellow);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    height: 100vh;
    width: 100vw;
  }

  p {
    margin: 0;
  }

  /* width: 100vw;
  height: 100vh; */
  background: linear-gradient(to bottom, red, yellow);
  
  button{
    cursor:pointer;
    background: linear-gradient(to top, red ,yellow);
    width: 100px;
    height: 40px;
    border-radius: 40px;

  }

  /* Outros estilos globais */
`;


function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  )
}

export default App
