// eslint-disable-next-line
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { ThemeProvider } from 'styled-components'

import ContextProvider from './Provider.js'
import theme from './theme.js'
import App from './App.js'
import registerServiceWorker from './registerServiceWorker'

const client = new ApolloClient({ uri: process.env.REACT_APP_SERVER })

ReactDOM.render(
  // TODO move these providers to App.js ?
  <ContextProvider>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  </ContextProvider>,
  document.getElementById('root')
)
registerServiceWorker()
