import React from 'react'
// import { FormattedMessage } from 'react-intl'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

class Chart extends React.Component {
  render () {
    const { dataType, data: { loading, error, sensorDataPerDate } } = this.props

    console.log(sensorDataPerDate)
    if (loading) {
      return <p>Loading ...</p>
    }

    if (error) {
      return <p>{error.message}</p>
    }

    return (
      <ResponsiveContainer width="100%" height="100%" >
        <LineChart
          width={600}
          height={300}
          data={sensorDataPerDate}
          margin={{top: 50, right: 30, left: 20, bottom: 5}}
        >
          <XAxis dataKey="time"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" name={dataType} dataKey="data" stroke="#8884d8" activeDot={{r: 8}}/>
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

export default Chart
