import React, { useState, useEffect } from 'react'
import Plan from './Plan'
import { dateNow } from '../utils/useTime'

// The infoscreen represents everything that is displayed.
function InfoScreen () {
  const [plan, setPlan] = useState(<Plan date={dateNow().date} time ={dateNow().time}/>)
  useEffect(() => {
    setPlan(<Plan date={dateNow().date} time={dateNow().time} />)
  }, [])
  return (
    <div>
      {plan}
    </div>
  )
}

export default InfoScreen
