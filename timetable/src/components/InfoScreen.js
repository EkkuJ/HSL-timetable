import React from 'react'
import { Header, Segment, Container } from 'semantic-ui-react'
import Plan from './Plan'
import BikePlan from './BikePlan'
import { UTCmilNow } from '../utils/useTime'

// The infoscreen represents everything that is displayed. Holds the time-state.
function InfoScreen () {
  const screenDate = UTCmilNow()

  return (
    <Container className="InfoScreen" style={{ margin: '2em' }} >
      <Header as='h1'>Get-to-Work!</Header>
      <Segment className="plan" style={{ background: '#a6abff' }}>
        <Plan date={screenDate} />
      </Segment>
      <Segment className="bike-plan" style={{ background: '#cceaff' }}>
        <BikePlan date={screenDate} />
      </Segment>
    </Container>
  )
}

export default InfoScreen
