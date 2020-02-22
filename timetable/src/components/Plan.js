import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { dateAt } from '../utils/useTime'

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
function Plan (date) {
  var queryDate = dateAt(date).date
  var queryTime = dateAt(date).time
  const { loading, error, data } = useQuery(GET_PLAN, {
    variables: { queryDate, queryTime }
  })
  var itineraryID = -1
  var legID = -1
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
    <div className="plan" id="plan">
      {data.plan.itineraries.map(itinerary => {
        itineraryID += 1
        return (
          <div className="itinerary" key={itineraryID}>
            <p className="itinerary-header">
              itinerary, duration: <span data-testid="duration">{itinerary.duration}</span>
            </p>
            <div className="itinerary-legs">
              legs: {itinerary.legs.map(leg => {
                legID += 1
                return (
                  <div className="leg" key={legID}>
                    from: {leg.from.name} at {dateAt(leg.startTime).time}<br />
                    to: {leg.to.name} at {dateAt(leg.endTime).time}<br />
                    with: {leg.mode}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Plan
