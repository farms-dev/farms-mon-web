import React from 'react'
import { Route } from 'react-router'

import Home from './components/Home'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Route path='/' exact component={Home} />
      </React.Fragment>
    )
  }
}

export default App
