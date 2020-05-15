import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import SensorPanel from './SensorPanel.js'

export const lastSensorDataBySensorQuery = gql`
  query lastSensorDataBySensor($sensorId: Int) {
    lastSensorDataBySensor (sensorId: $sensorId) { 
      data
      date
      time
    }
  }
`

export default graphql(lastSensorDataBySensorQuery, {
  options: ({ sensorId }) => ({
    variables: { sensorId: sensorId },
    pollInterval: 15000 // TODO move it to config}
  })
})(SensorPanel)
