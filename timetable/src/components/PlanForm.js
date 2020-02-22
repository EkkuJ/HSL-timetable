import React, { useState } from 'react'

// The PlanForm is the segment of the page that holds the form of the site. 
// Has the ability to change the time-state of the whole site.
function PlanForm (date, handleSubmit) {

  const [formDate, setFormDate] = useState(date)

  function handleFormSubmit () {
    handleSubmit(formDate)
  }

  function handleFormChange (event) {
    setFormDate(event.target.value)
  }

  return (
    <form className="PlanForm" onSubmit={e => handleFormSubmit(e)}>
      <label>
        Leave at:
        <input type="text" name="start-time" onChange={({ target }) => handleFormChange(target.value)} placeholder="Date input" />
        <input type="submit" value="Submit" />
      </label>
    </form>
  )
}

export default PlanForm
