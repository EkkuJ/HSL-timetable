import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Grid, Container, Segment, Header } from 'semantic-ui-react'
import Leg from './Leg'
import { dateAt, secsToMins } from '../utils/useTime'

// Lat and Long coordinates of "home" and Eficode used in the query below.
const home = {
  lat: 60.161042,
  long: 24.878615
}
const eficode = {
  lat: 60.169429,
  long: 24.926066
}

// The query used to fetch data for three itineraries at a time. Coordinates can be modified from above and the date- and time-parameters are
// passed to the query from inside the <Plan>-component that renders the data.
const GET_PLAN = gql`
  query Plan($date: String, $time: String, ){
    plan(
      date: $date,
      time: $time
      from: {lat: ${home.lat}, lon: ${home.long}}
      to: {lat: ${eficode.lat}, lon: ${eficode.long}}
      numItineraries: 3
    ) {
      itineraries {
        startTime
        duration
        legs {
          from {
            name
          }
          startTime
          to {
            name
          }
          endTime
          mode
          route {
            shortName
          }
          
        }
      }
    }
  }
`

// A Plan represents a group of three itineraries. It gets passed the date and time by the paenting InfoScreen.
function Plan (props) {
  var queryVariables = dateAt(props.date)
  const { loading, error, data } = useQuery(GET_PLAN, {
    variables: {
      date: queryVariables.date,
      time: queryVariables.time
    }
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
    <Container className="planContainer" id="plan">
      {data.plan.itineraries.map((itinerary) => (
        <Segment>
          <Grid className="itinerary" key={itinerary.startTime} verticalAlign="middle" columns={2} style={{background:"#cceaff"}}>
            <Grid.Column width={14} stretched='true'>
              <Grid className="itinerary-legs" >
                {itinerary.legs.map((leg) => (
                  <Grid.Column width={5} stretched='true' verticalAlign="middle">
                    <Leg key={leg.startTime.valueOf()} leg={leg} style={{ padding: '1em' }} />
                  </Grid.Column>
                ))}
              </Grid>
            </Grid.Column>
            <Grid.Column width={2}>
              <Segment className="itinerary-duration" stretched>
                <Header as='h4' data-testid="duration">{secsToMins(itinerary.duration)}min</Header>
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
      ))}
    </Container>
  )
}

export default Plan
