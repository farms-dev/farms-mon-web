import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Chart from './Chart.js'

export const sensorDataPerDateQuery = gql`
  query sensorDataPerDate($sensorId: Int, $date: String) {
    sensorDataPerDate (sensorId: $sensorId date: $date) {
      data
      time
    }
  }
`

export default graphql(sensorDataPerDateQuery, {
  options: ({ sensorId, date }) => ({
    variables: {
      sensorId: sensorId,
      date: date
    },
    pollInterval: 15000 // TODO move it to config}
  })
})(Chart)
