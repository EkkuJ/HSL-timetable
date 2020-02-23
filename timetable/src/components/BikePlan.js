import React from 'react'
import { dateAt, addMinsToDate } from '../utils/useTime'

// The BikePlan represents a segment that displays a plan to get to work with a bike.
function BikePlan (date) {
  return (
    <div>
      <p>
        Feeling frisky?
      </p>
      <p>
        Start biking at {dateAt(date.date).time}
      </p>
      <p>
        and be at Eficode by {dateAt(addMinsToDate(date.date, 10)).time} 
      </p>
    </div>
  )
}

export default BikePlan
