import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let CustomTheme = createMuiTheme({typography:{
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
}})
CustomTheme = responsiveFontSizes(CustomTheme)

CustomTheme.typography.h1 = {
    [CustomTheme.breakpoints.down('xs')]: {
        fontSize: '1.2rem'
    }
}

CustomTheme.typography.h6 = {
    fontSize: '1.2rem',
    [CustomTheme.breakpoints.down('xs')]: {
        fontSize: '0.9rem'
    },
}


export default CustomTheme