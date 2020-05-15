// eslint-disable-next-line
import React from 'react'
import { FormattedMessage } from 'react-intl'

let Internationalize = Component => props => {
  const { messages } = props
  const msg = messages.map((message, i) => <FormattedMessage id={message} />)

  return (
    <Component {...props} {...msg} />
  )
}

export default Internationalize
