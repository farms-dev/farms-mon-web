// eslint-disable-next-line
import React from 'react'
import Context from '../Context'

let contextualize = Component => props => (
  <Context.Consumer>
    { context => <Component {...props} {...context} /> }
  </Context.Consumer>
)

export default contextualize
