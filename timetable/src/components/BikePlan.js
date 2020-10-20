import React from 'react'
import { Container, Header, Segment, Icon } from 'semantic-ui-react'
import { dateAt, addMinsToDate } from '../utils/useTime'

// The BikePlan represents a segment that displays a plan to get to work with a bike.
function BikePlan (date) {
  var leave = dateAt(date.date).time.slice(0,-3)
  var arrive = dateAt(addMinsToDate(date.date, 12.5)).time.slice(0, -3)
  return (
    <Container>
      <Header as='h3'>
        Feeling frisky? Take a bike.
      </Header>
      <Segment.Group horizontal>
        <Segment textAlign="center">
          Home<br />{leave}
        </Segment>
        <Segment textAlign="center">
          <Icon name='bicycle' size='large' />
        </Segment>
        <Segment textAlign="center">
          University<br />{arrive}
        </Segment>
      </Segment.Group>
    </Container>
  )
}

export default BikePlan
