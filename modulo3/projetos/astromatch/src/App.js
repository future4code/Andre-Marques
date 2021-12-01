import axios from 'axios';
import {useState} from 'react'
import styled from 'styled-components'
import CardMatches from './Components/CardMatches';
import Header from './Components/Header';
import MatchList from './Components/MatchList';
import Button from '@material-ui/core/Button'
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }
`

const ButtonStyled = styled(Button)`
    &&{
        border-radius: 50px;
        background: linear-gradient(to bottom, #C94277, #101935, #F1E4F3);
        margin-top: 10px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
`

const MainDiv = styled.div`
  background:linear-gradient(#F2F2F2, #DCB6B6, #8E8E8E);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const DivBox = styled.div`
  background: linear-gradient(to right, #C94277, #101935, #F1E4F3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 630px;
  min-height: 630px;
`

function App(props) {

  const [page, setPage] = useState('home')
  const [discardMatches, setDiscardMatches] = useState(false)

  const URL = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/andremarques/'

  const clear = () => {
    axios.put(URL + 'clear')
    .then((res) => {
      setDiscardMatches(true)
      setDiscardMatches(false)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }

  const settingPageHome = () => {
    setPage('home')
  }

  const settingPageMatchs = () => {
    setPage('matches')
  }
  console.log(page)

  let settingPage = () => {
    switch(page){
      case 'home':
        return <CardMatches discardMatches={discardMatches} />
      case 'matches':
        return <MatchList discardMatches={discardMatches}/>
      default:
        return <CardMatches discardMatches={discardMatches} />
    }
  }

  return (
    <MainDiv>
      <GlobalStyle/>
      <DivBox>
        <Header
          page={page}
          settingPageHome={settingPageHome}
          settingPageMatches={settingPageMatchs}
        />
        {settingPage()}
      </DivBox>
      <ButtonStyled variant="contained" color="primary" onClick={() => clear()}>Discard swipes and matches</ButtonStyled>
    </MainDiv> 
  );
}

export default App;
