import { primaryColor, neutralColor } from './colors'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: "white"
        },
        text: {
            primary: neutralColor
        }
    }
})

export default theme