import React, { useState } from 'react'
import Plan from './Plan'
import PlanForm from './PlanForm'
import BikePlan from './BikePlan'
import { UTCminNow } from '../utils/useTime'

// The infoscreen represents everything that is displayed. Holds the time-state.
function InfoScreen () {
  const [screenDate, setScreenDate] = useState(UTCminNow())
  function handleFormSubmit (formTime) {
    setScreenDate(formTime)
  }
  return (
    <div className="InfoScreen">
      <PlanForm date={screenDate} handleSubmit={handleFormSubmit} />
      <Plan date={screenDate} />
      <BikePlan date={screenDate} />
    </div>
  )
}

export default InfoScreen
