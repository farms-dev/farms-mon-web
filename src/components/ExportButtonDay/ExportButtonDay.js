import React from 'react'
import csvDownload from 'json-to-csv-export'
import { Label, Button } from '../../elements'

class ExportButtonDay extends React.Component {
  render () {
    const { sensorId, date, data: { loading, error, sensorDataPerDate } } = this.props
    const filename = sensorId + '-' + date + '.csv'

    if (loading) {
      return <p>Loading ...</p>
    }

    if (error) {
      return <p>{error.message}</p>
    }

    return (
      <Button width='28px' onClick={() => csvDownload(sensorDataPerDate, filename)}>
        <Label>{'D'}</Label>
      </Button>
    )
  }
}

export default ExportButtonDay
