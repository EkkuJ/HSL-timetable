import React, { useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Segment } from 'semantic-ui-react'
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

  const { loading, error, data } = useQuery(GET_PLAN, {
    options: props => ({
      variables: { 
        date: dateAt(props.date).date, 
        time: dateAt(props.date).time}
    })
  })

  

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  //console.log(dateAt(data.plan.itineraries[0].legs[0].startTime))
  return (
    <div className="planContainer" id="plan">
      {data.plan.itineraries.map((itinerary) => (
        <Segment className="itinerary" key={itinerary.startTime}>
          <p className="itinerary-header">
            duration: <span data-testid="duration">{secsToMins(itinerary.duration)}</span>
          </p>
          <Segment.Group className="itinerary-legs" horizontal>
            {itinerary.legs.map((leg) => { 
              //console.log(dateAt(leg.startTime.valueOf()))
              return <Leg key={leg.startTime.valueOf()} leg={leg}/>
            })}
          </Segment.Group>
        </Segment>

      ))}

    </div>
  )
}

export default Plan
