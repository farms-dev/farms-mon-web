// eslint-disable-next-line
import React from 'react'
import { FormattedMessage, addLocaleData, IntlProvider } from 'react-intl'
// TODO move the lang things to the app.js
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'

import messages from '../../messages'

import { Chart, SensorPanel } from '../../components'

import {
  Header,
  Container,
  Label
} from '../../elements'

addLocaleData(en)
addLocaleData(pt)

class Home extends React.Component {
  // TODO move it to a different place
  currentDate () {
    const now = new Date()
    const year = now.getFullYear()
    const month = (now.getMonth() + 1) < 10 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1)
    const day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
    let newDate = ''
    newDate = newDate.concat(year, month, day)
    return newDate
  }

  render () {
    const { lang, incDate, decDate, sensorDates } = this.props

    return ( // TODO change the visual props (backgroundColor) to modifier and move IntlProvider to App.js
      // TODO move sensorDates to DB
      <IntlProvider locale={lang} messages={messages[lang]} >
        <Container backgroundColor='#888888' >
          <Header paddingTop="5px">
            <Label>
              <FormattedMessage id='app.label' />
            </Label>
          </Header>

          {sensorDates.map((sensorDate, i) =>
            <Container key={i} justifyContent="center" marginBottom="10px" >
              <SensorPanel
                label={sensorDate.label}
                type={sensorDate.type}
                sensorIndex={i}
                sensorId={sensorDate.sensorId}
                date={sensorDate.date}
                location={sensorDate.location}
                incDate={incDate}
                decDate={decDate}
              />
              <Container backgroundColor="#FFF" justifyContent="center" height="300px" width="800px" flexGrow="2" >
                <Chart sensorId={sensorDate.sensorId} dataType={sensorDate.dataType} date={sensorDate.date} />
              </Container>
            </Container>
          )}
        </Container>
      </IntlProvider>
    )
  }
}

export default Home
