import React from 'react'
import update from 'react-addons-update'

import Context from './Context'

export class ContextProvider extends React.Component {
  constructor () {
    super()
    this.state = {
      lang: 'en',
      sensorDates: [
        {
          sensorId: 4,
          date: this.currentDate(),
          label: 'Soil humidity',
          dataType: 'Humidity',
          type: '%',
          location: 'Banch 1'
        }
      ]
    }
    this.incDate = this.incDate.bind(this)
    this.decDate = this.decDate.bind(this)
  }

  currentDate () {
    const now = new Date()
    const year = now.getFullYear()
    const month = (now.getMonth() + 1) < 10 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1)
    const day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
    let newDate = ''
    newDate = newDate.concat(year, month, day)
    return newDate
  }

  incDate (index, date) {
    let day = date.substr(6, 2)
    let month = date.substr(4, 2)
    let year = date.substr(0, 4)

    console.log('date: ' + date)
    console.log('day: ' + day)
    console.log('month: ' + month)
    console.log('year: ' + year)

    if (month === '02') {
      console.log('month 02')
      if (day === '28') {
        month = '03'
        day = 1
      } else {
        ++day
      }
    } else if (month === '12') {
      console.log('month 12')
      if (day === '31') {
        year = ++year
        month = '01'
        day = 1
      } else {
        ++day
      }
    } else if (month === '01' || month === '03' || month === '05' ||
      month === '07' || month === '08' || month === '10' || month === '12') {
      console.log('month 31')
      if (day === '31') {
        console.log('day 31')
        month = (++month < 10 ? '0' + month : month)
        day = 1
        console.log('day: ' + day)
        console.log('month: ' + month)
      } else {
        ++day
      }
    } else {
      console.log('month 30')
      if (day === '30') {
        console.log('day 31')
        month = (++month < 10 ? '0' + month : month)
        day = 1
        console.log('day: ' + day)
        console.log('month: ' + month)
      } else {
        ++day
      }
    }

    day = day < 10 ? '0' + day : day
    let newDate = ''
    newDate = newDate.concat(year, month, day)

    console.log('newDate: ' + newDate)

    this.setState({
      sensorDates: update(this.state.sensorDates, {[index]: {date: {$set: newDate}}})
    })
  }

  decDate (index, date) {
    let day = date.substr(6, 2)
    let month = date.substr(4, 2)
    let year = date.substr(0, 4)

    console.log('date: ' + date)
    console.log('day: ' + day)
    console.log('month: ' + month)
    console.log('year: ' + year)

    if (month === '01') {
      console.log('month 01')
      if (day === '01') {
        year = --year
        month = '12'
        day = 31
      } else {
        --day
      }
    } else if (month === '03') {
      console.log('month 03')
      if (day === '01') {
        month = '02'
        day = 28
      } else {
        --day
      }
    } else if (month === '02' || month === '04' || month === '06' ||
      month === '08' || month === '09' || month === '11') {
      console.log('month 31')
      if (day === '01') {
        console.log('day 31')
        month = (--month < 10 ? '0' + month : month)
        day = 31
        console.log('day: ' + day)
        console.log('month: ' + month)
      } else {
        --day
      }
    } else {
      console.log('month 30')
      if (day === '01') {
        console.log('day 30')
        month = (--month < 10 ? '0' + month : month)
        day = 30
        console.log('day: ' + day)
        console.log('month: ' + month)
      } else {
        --day
      }
    }

    day = day < 10 ? '0' + day : day
    let newDate = ''
    newDate = newDate.concat(year, month, day)

    console.log('newDate: ' + newDate)

    this.setState({
      sensorDates: update(this.state.sensorDates, {[index]: {date: {$set: newDate}}})
    })
  }

  render () {
    return (
      <Context.Provider value={{
        lang: this.state.lang,
        sensorDates: this.state.sensorDates,
        incDate: this.incDate,
        decDate: this.decDate
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default ContextProvider
