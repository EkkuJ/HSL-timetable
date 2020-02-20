import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const PLAN = gql`
{
  plan(
    date: "2020-02-19",
    time:"23:00:00"
    from: {lat: 60.160892, lon: 24.879080}
    to: {lat: 60.169420, lon: 24.926060}
    numItineraries: 3
  ) {
    itineraries {
      duration
    }
  }
}
`
function Plan () {
  const { loading, error, data } = useQuery(PLAN)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.plan.itineraries.map(({ duration }) => (
    <div key={duration}>
      <p>
        {duration}
      </p>
    </div>
  ))
}

export default Plan
