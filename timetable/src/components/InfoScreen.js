import React, { useState } from 'react'
import { Header, Grid, Segment, Container } from 'semantic-ui-react'
import Plan from './Plan'
import PlanForm from './PlanForm'
import BikePlan from './BikePlan'
import { UTCmilNow } from '../utils/useTime'

// The infoscreen represents everything that is displayed. Holds the time-state.
function InfoScreen () {
  const [screenDate, setScreenDate] = useState(UTCmilNow)
  const handleFormSubmit = (formTime) => {
    setScreenDate(formTime)
  }
  
  return (
    <Container className="InfoScreen" style={{margin: "2em"}}>
      <Header as='h1'>Get-to-Work!</Header>
      <Grid>
        <Grid.Column width={5}>
          <Segment>
            <PlanForm date={screenDate} handleSubmit={handleFormSubmit} />
          </Segment>
        </Grid.Column>
        <Grid.Column width={11}>
          <Segment className="plan">
            <Plan date={screenDate} />
          </Segment>
          <Segment>
            <BikePlan date={screenDate} />
          </Segment>
        </Grid.Column>
      </Grid>
      
    </Container>
  )
}

export default InfoScreen
