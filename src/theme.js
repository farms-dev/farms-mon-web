import { injectGlobal } from 'styled-components'

// eslint-disable-next-line
injectGlobal`
  html {
    height: 100%;
    margin: 0;
    background-color: black;
  }
  body {
    height: 100%;
    margin: 0;
    background-color: grey;
  }
  #root {
    height: 100%;
    margin: 0;
    background-color: silver;
  }
`

const theme = {
  fontSize: {
    giant: '4.0rem',
    medium: '1.2rem',
    small: '0.9rem',
    verySmall: '0.6rem'
  },
  fontFamily: {
    default: 'Arial'
  },
  backgroundColor: {
    button: '#6286CF'
  }
}

export default theme
