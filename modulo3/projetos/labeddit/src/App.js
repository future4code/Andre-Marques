import { ThemeProvider } from '@material-ui/core';
import react from 'react'
import Router from './router/Router'
import theme from './constants/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
     <Router />
    </ThemeProvider>
  )
}

export default App;
